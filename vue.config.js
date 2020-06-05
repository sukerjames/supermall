module.exports = {
  configureWebpack: {
    resolve: {
      //默认配置过这些东西了，这个就是引用的时候忽略后缀名。
      //extension: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
};