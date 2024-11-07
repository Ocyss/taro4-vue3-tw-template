import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { router } from './router'

import '@nutui/touch-emulator'

import './app.css'
// import '@tarojs/taro/html.css'

const App = createApp({
  onShow(_options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia())
App.use(router)
export default App
