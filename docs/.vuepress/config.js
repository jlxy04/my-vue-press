module.exports = {
    title: 'API文档',
    description: 'Just playing around',
    dest: 'doc-dist',
    themeConfig: {
        nav: [
            { text: '规范', link: '/user/' },
            { text: '组件说明', link: '/order/' },
            { text: '扩展2', link: '/order/' },
            { text: '扩展3', link: '/order/' },
            { text: '扩展4', link: '/order/' },
            { text: '扩展5', link: '/order/' }
        ],
        sidebar: {
            '/order/': [
                '',
                'addOrder'
            ],
            '/user/': [
                '',
                'interface'
            ]
        },
        sidebarDepth: 2,
        evergreen: true,
        lastUpdated: 'Last Updated'
    }
}