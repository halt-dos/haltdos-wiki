/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  community_sidebar: [
    {
      type: 'category',
      label: 'Community WAF',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'community'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'community'
        }
      ]
    },
  ],
  waf_sidebar: [
    {
      type: 'category',
      label: 'Web Application Firewall',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/waf'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/waf'
        }
      ]
    }
  ],
  adc_sidebar: [
    {
      type: 'category',
      label: 'Application Delivery Controller',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/adc'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/adc'
        }
      ]
    }
  ],
  platform_sidebar: [
    {
      type: 'category',
      label: 'Haltdos Platform',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/platform'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/platform'
        }
      ]
    }
  ],
  llb_sidebar: [
    {
      type: 'category',
      collapsed: true,
      label: 'Link Load Balancer',
      link: {
        type: 'doc',
        id: 'enterprise/llb'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/llb'
        }
      ]
    }
  ],
  ddos_sidebar: [
    {
      type: 'category',
      label: 'Anti-DDOS',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/ddos'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/ddos'
        }
      ]
    }
  ],
  gslb_sidebar: [
    {
      type: 'category',
      label: 'Global Server Load Balancer',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/gslb'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/gslb'
        }
      ]
    }
  ],
  vpn_sidebar: [
    {
      type: 'category',
      label: 'Remote Access Gateway',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'enterprise/vpn'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'enterprise/vpn'
        },
      ]
    }
  ],
  kb_sidebar: [
    {
      type: 'category',
      label: 'Knowledge Base',
      link: {
        type: 'doc',
        id: 'kb'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'kb'
        }
      ]
    },
  ],
  cloud_sidebar: [
    {
      type: 'category',
      label: 'Haltdos Cloud',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'cloud'
      },
      items: [
        {
          type:'autogenerated',
          dirName: 'cloud'
        }
      ]
    },
  ]
};

module.exports = sidebars;