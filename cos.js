'use strict';

const Service = require('@cocacms/cocacms').Service;
const COS = require('cos-nodejs-sdk-v5');
const fs = require('fs');
const path = require('path');

class MailService extends Service {

  async install() {
    return true;
  }

  async uninstall() {
    return true;
  }

  _upload(readableStream, filename, config) {
    return new Promise((resolve, reject) => {
      if (!config) {
        reject(new Error('缺少COS上传配置'));
      }
      const key = `${config.prefix}${filename}`;
      const temppath = path.join(__dirname, filename);
      const temp = fs.createWriteStream(temppath);
      readableStream.pipe(temp).on('close', function() {
        try {
          const cos = new COS({
            AppId: config.AppId,
            SecretId: config.SecretId,
            SecretKey: config.SecretKey,
          });

          cos.putObject({
            Bucket: config.Bucket,
            Region: config.Region,
            Key: key,
            Body: fs.createReadStream(temppath),
            ContentLength: fs.statSync(temppath).size,
          }, function(err, data) {
            if (err) {
              reject(new Error(err.error.Message));
            } else {
              fs.unlinkSync(temppath);
              resolve(data.Location);
            }
          });

        } catch (error) {
          reject(error);
        }
      });

    });
  }

  /**
   * COS上传
   *
   * @param {*} config 配置
   * @param {*} stream 流
   * @param {*} filename 文件名
   * @return {*} 处理结果
   * @memberof UploadService
   */
  async upload(config, stream, filename) {
    const result = await this._upload(stream, `${filename}`, config);
    return {
      url: result,
    };
  }
}

module.exports = MailService;
