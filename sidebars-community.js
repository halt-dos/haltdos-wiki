/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    community_sidebar: [
        {
            type: 'category',
            label: 'Community WAF',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'introduction'
            },
            items: [
                {
                    type: 'doc',
                    id: 'about'
                },
                {
                    type: 'doc',
                    id: 'features'
                },
                {
                    type: 'category',
                    label: 'Getting Started',
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'getting-started'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Docs',
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'docs'
                        }
                    ]
                },
                {
                    type: 'category',
                    label: 'Knowledge Base',
                    collapsed: true,
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'kb'
                        }
                    ]
                }
            ]
        }
    ]
};

module.exports = sidebars;