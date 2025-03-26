import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的厉害的项目",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', items:[
          {text:'首页',link:'/'},
          {text:'markdown示例',link:'/markdown-examples'},
        ]},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright@2022-present siehun'
    }
  }
})
