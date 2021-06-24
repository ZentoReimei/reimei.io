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
    image: 'img/ogp.png',
    metadatas: [
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'description',
        content: '投票率95%の全都民主主義で東京の明日を変える全都黎明 (ぜんとれいめい)'
      },
      {
        property: 'og:description',
        content: '投票率95%の全都民主主義で東京の明日を変える全都黎明 (ぜんとれいめい)'
      }
    ],
    navbar: {
      logo: {
        alt: '全都黎明 (ぜんとれいめい)ロゴ',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'missionstatement',
          position: 'left',
          label: 'ドキュメント'
        },
        // { to: '/blog', label: 'ブログ', position: 'left' },
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
              to: '/docs/missionstatement'
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
            // {
            //   label: 'ブログ',
            //   to: '/blog'
            // },
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
          editUrl: 'https://github.com/ZentoReimei/reimei.io/tree/master/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ZentoReimei/reimei.io/tree/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
