const path = require('path');

export default {
  targets: {
    ie: 10,
  },
  dva: {},
  antd: {},
  dynamicImport: {},
  alias: {
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.ts')
  },
  chainWebpack(config) {
    config.merge({
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|less)$/,
              chunks: 'async',
              minChunks: 2,
              minSize: 0,
            },
            vendors: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
              chunks: 'all',
              minSize: 30000,
              minChunks: 3,
              automaticNameDelimiter: '.',
            }
          }
        }
      },
    });
  },
  ignoreMomentLocale: true,
  metas: [{ 'http-equiv': 'A-UA-Compatible', content: 'IE=Edge,chrome=1' }],
  title: 'DRG5.0静态首页',
  favicon: '/favicon.ico',
  extraBabelPlugins: ['lodash'],
  plugins: ['lodash-webpack-plugin'],
  theme: {
    '@theme-color': '#3367d6',
    // body 背景色
    '@body-background': '#f7f7f7',
    // 主色, 链接色
    '@primary-color': '#3367d6',
    // 主体文字大小
    '@font-size-base': '12px',
    '@heading-color': '#000', // 标题色
    // 常规文字
    '@text-color': '#000',
    // 次级文字
    '@text-color-secondary': '#666',
    '@border-color': '#e7e7e7',
    // 失效文字
    '@disabled-color': '#bfbfbf',
    // 表格表头背景色
    '@table-header-bg': '#dce7ff',
    // Tabs padding
    '@tabs-horizontal-padding': '14px 4px',
    '@success-color': '#52c41a',
    '@warning-color': '#faad14',
    '@error-color': '#f5222d',
  }
};
