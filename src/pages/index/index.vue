<script>
import { ref } from 'vue'

export default {
  setup() {
    const msg = ref('Hello world123')
    return {
      msg,
    }
  },
}
</script>

<template>
  <view class="bg-slate-500 text-[#acc855] text-[100px]">
    <text>{{ msg }}</text>
    <view class="text-3xl">
      1
    </view>
    <view>2</view>
    <view>3</view>
  </view>
</template>
