

const nav = [
    { text: '文档', link: '/document' },
    {
        text: '关于',
        items: [
            { text: '常见问题', link: '/problems' },
            { text: '团队', link: '/team' }
        ]
    }
]

const sidebar = [
    {
        text: '介绍',
        items: [
            { text: '什么是GalaxyUI', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '入门', link: '/guide/getting-started' }
        ]
    },
    {
        text: '通用',
        items: [
            { text: 'Button 按钮', link: '/components/button' }
        ]
    }
]

const config = {
    title: 'GalaxyUI',
    description: 'Powerful.',
    themeConfig: {
        siteTitle: 'GalaxyUI',
        logo: '/planet.svg',
        nav,
        sidebar
    },
    markdown: {
        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}

export default config

