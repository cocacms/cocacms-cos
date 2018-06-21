'use strict';

module.exports = {
  name: '腾讯云COS上传',
  author: 'rojer',
  mail: 'rojerchen@qq.com',
  /**
   * 1 通用
   * 2 上传
   */
  type: 2,
  config: [
    /**
     * 单行文本 varchar
     * 整数 int
     * 小数 decimal
     * 多行文本 text
     * 单选 radio
     * 选择框 select
     * 多选 checkbox
     * 时间选择器 time
     * 日期选择器 date
     * 日期时间选择器 datetime
     * 图片 img
     * 文件 file
     * 富文本 richtext
     * 评分 rate
     * 开关 switch
     */
    {
      key: 'Region',
      name: 'Region',
      type: 'select',
      rules: [{ required: true, message: '请输入' }],
      optionsArray: [
        { label: '北京一区（华北）', value: 'ap-beijing-1' },
        { label: '北京', value: 'ap-beijing' },
        { label: '上海（华东）', value: 'ap-shanghai' },
        { label: '广州（华南）', value: 'ap-guangzhou' },
        { label: '成都（西南）', value: 'ap-chengdu' },
        { label: '重庆', value: 'ap-chongqing' },
        { label: '新加坡', value: 'ap-singapore' },
        { label: '香港', value: 'ap-hongkong' },
        { label: '多伦多', value: 'na-toronto' },
        { label: '法兰克福', value: 'eu-frankfurt' },
        { label: '孟买', value: 'ap-mumbai' },
        { label: '首尔', value: 'ap-seoul' },
        { label: '硅谷', value: 'na-siliconvalley' },
        { label: '弗吉尼亚', value: 'na-ashburn' },
        { label: '曼谷', value: 'ap-bangkok' },
        { label: '莫斯科', value: 'eu-moscow' },
      ],
    },
    {
      key: 'prefix',
      name: '上传前缀',
      rules: [{ required: true, message: '请输入' }],
      type: 'varchar',
    },
    {
      key: 'AppId',
      name: 'AppId',
      rules: [{ required: true, message: '请输入' }],
      type: 'varchar',
    },
    {
      key: 'SecretId',
      name: 'SecretId',
      rules: [{ required: true, message: '请输入' }],
      type: 'varchar',
    },
    {
      key: 'SecretKey',
      name: 'SecretKey',
      rules: [{ required: true, message: '请输入' }],
      type: 'varchar',
    },
    {
      key: 'Bucket',
      name: 'Bucket',
      rules: [{ required: true, message: '请输入' }],
      type: 'varchar',
    },
  ],
};
