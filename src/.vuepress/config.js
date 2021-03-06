module.exports = {
  base: '/blog/',
  dest: 'docs',
  title: 'syc的技术成长',
  description: '信念和目标，必须永远洋溢在程序员内心！',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '实战分享',
        items: [
          { text: 'flutter混合开发', link: '/share/flutter' },
          { text: 'flutter_web体验', link: '/share/flutter_web' },
          { text: 'vue服务端渲染', link: '/share/ssr' },
          { text: '小程序开发总结', link: '/share/mp' },
          { text: 'go+vue前后端分离实战', link: '/share/iris' },
          { text: 'uni-app多端开发回顾', link: '/share/uni' },
        ],
      },
      {
        text: '大前端教程',
        items: [
          { text: '前端进阶', link: '/fe/vue' },
          { text: 'JS入门', link: '/js/1' },
          { text: '常用网址', link: '/url/fe' },
        ],
      },
    ],
    sidebar: {
      '/fe/': genSidebarConfig('大前端教程', [
        'vue',
        'VueRouter',
        'vuex',
        'linux',
        'vscode',
        'node',
        'code',
        'suanfa',
        'ngnix',
        'pm2',
      ]),
      '/js/': genSidebarConfig('JS入门', ['1']),
    },
  },
}

function genSidebarConfig(title, children) {
  return [{ title, children }]
}
