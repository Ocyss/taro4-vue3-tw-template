<script setup lang="ts">
import { ref } from 'vue'
import Taro from '@tarojs/taro'

const msg = ref('Hello Taro')

const show = ref(false)
function click() {
  show.value = true
}
</script>

<template>
  <nut-cell title="我是标题" desc="描述文字1" @click="click" />
  <nut-popup v-model:visible="show" closeable position="bottom" style="height: 50%;">
    这里是 popup 的内容
  </nut-popup>
  <div class="bg-slate-500 text-[#acc855] text-[100px]">
    <span>{{ msg }}</span>
    <div class="text-3xl">
      1
    </div>
    <div>2</div>
    <div>34</div>
  </div>
  <div>
    <!-- TODO: 按钮丢失 -->
    <nut-button type="primary">
      Primary
    </nut-button>
    <nut-button type="info">
      Info
    </nut-button>
  </div>
  <nut-divider dashed>
    跳转
  </nut-divider>
  <a block type="default" @click="Taro.navigateTo({ url: '/pages/router/index' })">
    前往"vue-router"页面
  </a>
</template>
