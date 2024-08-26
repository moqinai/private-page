/*
 * @Author: lpc
 * @Date: 2024-08-26 18:20:20
 * @LastEditors: lpc
 * @LastEditTime: 2024-08-26 20:37:36
 * @FilePath: /private-object-page/.eslintrc.js
 * @Description: 
 */

const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true, // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
  env: {
    browser: true,
    es2021: true,
  }, // 启用的规则
  extends: ['plugin:vue/vue3-recommended', 'standard', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
  parserOptions: {
    // js的版本
    ecmaVersion: 13, // 解析器
    parser: '@typescript-eslint/parser', // 模块化方案
    sourceType: 'module',
  }, // 引用的插件  下载的插件去掉eslint-plugin-前缀引入
  plugins: ['vue', '@typescript-eslint', 'prettier', 'import', 'node', 'promise', '@zonst/fed'], // 自定义规则
  rules: {
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': 1,
  },
})

// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     "plugin:vue/vue3-essential",
//     "eslint:recommended",
//     "plugin:prettier/recommended",
//   ],
//   parserOptions: {
//     parser: "@babel/eslint-parser",
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//   },
// };

