// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true,
      compiler: 'vite',
      dynamicImportNode: false,
    }],
    ['@babel/preset-env'],
    ['@babel/preset-typescript', {
      isTSX: true,
      allExtensions: true,
      allowDeclareFields: true,
    }],
  ],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-class-properties',
  ],
}
