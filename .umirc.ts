import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'lib-04',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base:'/lib-04/',
  publicPath:'/lib-04/',
  exportStatic: {},//将所有的路径输出为html目录结构， 以免刷新页面时404
  mode: 'site',
  // more config: https://d.umijs.org/config
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/1.x/packages/theme-default/src/style/variables.less
    '@c-primary': 'lightpink',
    '@hd': '0.02rem',
  },
  extraBabelPlugins:[
    [
      'import',
      {
        libraryName: 'lib-04',
        camel2DashComponentName: false,
        // customStyleName: (name) => {
        //   return `./style/index.less`; // 注意：这里 ./ 不可省略
        // },
      },
      'lib-04',
    ],
  ]
});
