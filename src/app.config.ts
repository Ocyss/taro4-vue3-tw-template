export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/router/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页',
      },
      {
        pagePath: 'pages/router/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '路由',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
