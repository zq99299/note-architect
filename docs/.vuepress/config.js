const hcSc = require('../hc')
const ztcSc = require('../ztc')

module.exports = {
  // ~ 开发配置
  dest: 'build/.vuepress/dist',  // 目录配置在外,纯粹是有代码洁癖和强迫症，并不能规避开发模式下同时构建不报错的问题
  host: 'localhost', // dev 的域名
  port: 8080,

  // ~ 站点配置
  title: 'JAVA 架构师笔记',
  description: '用来记录架构师相关成套的知识',
  base: '/note-architect/', // gh-page 中是增加了项目名
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  markdown: {
    lineNumbers: true
  },
  // theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
    sidebar: 'auto',
    sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
    lastUpdated: '上次更新', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/zq99299/note-architect',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    logo: '/mlogo.svg',
    // 主题级别的配置
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      { text: '高并发系统设计 40 问', link: '/hc/' },
      { text: 'JAVA 架构师直通车', link: '/ztc/' }
    ],
    sidebar: {
      '/hc/': hcSc(),
      '/ztc/': ztcSc(),
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: '有新内容更新啦~',
        buttonText: '立即获取新内容，确定后稍后自动刷新'
      }
    }],
    ['@vuepress/medium-zoom', {
      selector: '.theme-default-content img'
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment')
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    }],
    ['vuepress-plugin-tags'],
    ['vuepress-plugin-baidu-autopush', true]
  ]
}
