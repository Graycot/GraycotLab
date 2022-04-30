// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Graycot Lab',
  tagline: 'Documentation and Blog',
  url: 'https://graycot.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Graycot', // Usually your GitHub org/user name.
  projectName: 'GraycotLab', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Graycot/GraycotLab/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Graycot/GraycotLab/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      navbar: {
        title: 'Graycot Lab',
        logo: {
          alt: 'Graycot Lab Logo',
          src: 'img/logov2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'o-ring',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/manifesto', label: 'Manifesto', position: 'left'},
          {
            href: 'https://github.com/Graycot/GraycotLab',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/JM34yvMaFP',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'O-Ring',
                to: '/docs/o-ring/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Personal Site',
                href: 'https://graystea.neocities.org',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/JM34yvMaFP',
              },
              {
                label: 'Mastodon',
                href: 'https://fosstodon.org/@Graycot',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Graycot/GraycotLab',
              },
            ],
          },
        ],
        copyright: `Copyleft 🄯 ${new Date().getFullYear()} GGraycot@gmail.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    
};

module.exports = config;