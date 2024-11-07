<script setup lang="ts">
import { ref } from 'vue'
import Taro from '@tarojs/taro'

import { useCounterStore } from '~/store'

const msg = ref('Hello Taro!!')
const show = ref(false)
const counterStore = useCounterStore()

function increment() {
  if (counterStore.count < 100) {
    counterStore.increment(5)
  }
}
function decrement() {
  if (counterStore.count > 0) {
    counterStore.decrement(5)
  }
}
</script>

<template>
  <nut-cell title="我是标题" desc="描述文字1" @click="show = true" />
  <nut-popup v-model:visible="show" closeable position="bottom" style="height: 50%;">
    这里是 popup 的内容
  </nut-popup>
  <nut-divider dashed>
    tailwindcss 展示
  </nut-divider>
  <div class="bg-gray-100 p-8">
    <div class="text-center mb-8">
      <span class="text-4xl font-bold text-gray-800 tracking-wider">{{ msg }}</span>
    </div>

    <div class="bg-white rounded-xl p-6 shadow">
      <p class="text-2xl text-gray-700 font-serif italic mb-4">
        "人生若只如初见，何事秋风悲画扇。"
      </p>
      <p class="text-right text-gray-500 text-sm">
        ——纳兰容若《木兰词》
      </p>
    </div>
  </div>
  <nut-divider dashed />
  <div>
    <nut-button type="info" @click="decrement">
      -5
    </nut-button>
    <nut-button type="primary" @click="increment">
      +5
    </nut-button>

    <nut-progress :percentage="counterStore.count" />
  </div>
  <nut-divider dashed>
    跳转
  </nut-divider>
  <nut-button block type="default" @click="Taro.switchTab({ url: '/pages/router/index' })">
    前往"vue-router"页面
  </nut-button>
</template>
