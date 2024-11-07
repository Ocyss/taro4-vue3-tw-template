## taro4-vue3-tw-template

一个基于 Taro4、Vue3、Vite、NutUI、TypeScript、TailwindCSS 的模板
比如 antfu 的 Eslint 配置, 以及一些其他配置

> [!CAUTION]
> 自用项目, 缺少测试和使用, 请谨慎使用  


## 特征

- 使用现代库开发, 包括未发布版本
  - Taro@4.0
  - Vite@4.5
  - Vue@3.5
  - NutUI@4.3
  - Pinia@2.2
  - TailwindCSS@3.4

- 添加 taro-html 插件, 允许使用 html 标签 (div等html4标签)
- 使用 antfu 的 Eslint 配置


## 已知问题

#### 严重问题

> 需等上游修复

- 快手小程序能使用`dev:weapp`运行和上传, 但无法分析是否为快手端, 登录可能无法使用
- 小程序`NutUI`部分组件丢失 (如`Button`)
- `H5`环境`NutUI`部分组件无法使用 (如`CircleProgress`)

#### 其他问题

- 微信小程序不兼容 daisyui
