import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'lib-04',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/1.x/packages/theme-default/src/style/variables.less
    '@c-primary': 'lightpink',
    '@hd': '0.02rem',
  },
});
