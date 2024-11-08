import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

// 自定义组件
import Home from '~/components/Home.vue'
import Tab1 from '~/components/Tab1.vue'
import Tab2 from '~/components/Tab2.vue'
import Tab3 from '~/components/Tab3.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import User from '~/components/User.vue'
import UserProfile from '~/components/UserProfile.vue'
import UserPosts from '~/components/UserPosts.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  // query传参
  { path: '/tab1', component: Tab1 },
  // 命名视图
  {
    path: '/tab2',
    components: {
      default: Tab2,
      // Tab2Header: Tab2Header 的缩写
      Header,
      // 它们与 `<router-view>` 上的 `name` 属性匹配
      Footer,
    },
  },
  // 路由传参
  { path: '/tab3/:groupId/:id', component: Tab3 },
  // 嵌套路由
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: UserPosts,
      },
    ],
    beforeEnter: (to, from) => {
      console.log('User导航守卫\n', 'to:', to, 'from:', from)
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
