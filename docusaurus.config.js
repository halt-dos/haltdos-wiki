const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Haltdos Docs',
  tagline: 'User Guide',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logo/icon_light.ico',
  url: 'https://docs.haltdos.com',
  baseUrl: '/',
  organizationName: 'haltdos',
  projectName: 'haltdos-wiki',

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions:{
            'current': {
              label: 'v8'
            },
            '7.0': {
              label: 'v7',
              banner: 'none',
              path: 'v7',
              badge: true
            },
            '6.0': {
              label: 'v6',
              path: 'v6',
              badge: true
            }
          },
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        "specs": [
          {
            "id": "apiDocs",
            "route": "/api",
            "spec": "haltdos-api.yaml"
          }
        ],
        "theme": {
          "primaryColor": "#4786FF",
          "options": {
            "disableSearch": true,
            "requiredPropsFirst": true,
            "noAutoAuth": true
          }
        }
      }
    ]
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
          'always'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo/icon_light.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: '/community',
        sidebarPath: require.resolve('./sidebars-community.js'),
        docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
        breadcrumbs: true
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'professional',
        path: 'professional',
        routeBasePath: '/professional',
        sidebarPath: require.resolve('./sidebars-professional.js'),
        docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
        breadcrumbs: true
      },
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      algolia: {
        appId: '1ZIELJEF8N',
        apiKey: 'a7af1e25b6dd3029f65b497136ac7a9d',
        indexName: 'haltdos',
        contextualSearch: true,
        searchPagePath: 'search',
        insights: true
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs:{
        sidebar:{
          hideable: true,
          autoCollapseCategories: true
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Haltdos',
          src: 'img/logo/dark_doc_logo.png',
          srcDark: 'img/logo/light_doc_logo.png'
        },
        items: [
          {to: 'community/introduction', label: 'Community', position: 'left'},
          {to: 'professional/introduction', label: 'Professional', position: 'left'},
          {to: 'enterprise', label: 'Enterprise', position: 'left'},
          {to: 'cloud', label: 'Cloud', position: 'left'},
          {to: 'mssp', label: 'MSSP', position: 'left'},
          {href: '/api', label: 'Haltdos API', position: 'left'},
          {href: 'https://haltdos.com',label: 'Haltdos', target: '_blank', rel: null, position: 'right', className:'haltdos'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'dropdown',
            label: 'More',
            position: 'left',
            className: 'custom',
            items: [
              {to: 'kb', label: 'Knowledge Base'},
              {to: 'glossary', label: 'Glossary'},
              {href: 'https://www.haltdos.com/blogs',label: 'Blogs', target: '_blank', rel: null}
            ],
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;