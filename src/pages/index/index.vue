<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello world123')

const show = ref(false)
function click() {
  show.value = true
}
const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062',
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

    <nut-circle-progress :progress="50" color="skyblue" />
    <nut-circle-progress :progress="100" :color="gradientColor" />
  </div>
</template>
