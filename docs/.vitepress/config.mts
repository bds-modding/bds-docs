import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BDS Docs",
  description: "A documentation helping modders to understand BDS and it's innerworkings.",
  base: "/docs/",
  themeConfig: {
    logo: "https://raw.githubusercontent.com/bds-modding/bds-docs/main/logo.png",
    siteTitle: "BDS Docs",

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Loom FAQ',
        items: [
          { text: 'What is Loom?', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bds-modding/bds-docs' }
    ],

    search: {
      provider: "local"
    }
  }
})
