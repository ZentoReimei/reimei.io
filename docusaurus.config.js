const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '全都黎明 (ぜんとれいめい)',
  tagline: 'Dinosaurs are cool',
  url: 'https://reimei.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ZentoReimei',
  projectName: 'reimei.io',
  themeConfig: {
    navbar: {
      title: '全都黎明 (ぜんとれいめい)',
      logo: {
        alt: '全都黎明 (ぜんとれいめい)',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'ドキュメント'
        },
        { to: '/blog', label: 'ブログ', position: 'left' },
        {
          href: 'https://github.com/ZentoReimei/reimei.io',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'ドキュメント',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/ZentoReimei'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'ブログ',
              to: '/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ZentoReimei/reimei.io'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZentoReimei.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    gtag: {
      trackingID: process.env.TRACKING_ID || 'G-XXXXXX'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
