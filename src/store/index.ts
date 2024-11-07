import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0, selected: 0 }
  },
  actions: {
    increment(num: number = 1) {
      this.count += num
    },
    decrement(num: number = 1) {
      this.count -= num
    },
    setSelected(index: number) {
      this.selected = index
    },
  },
})
