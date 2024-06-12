import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BDS Docs",
  description: "A documentation helping modders to understand BDS and it's innerworkings.",
  base: "/bds-docs/",
  themeConfig: {
    logo: "https://raw.githubusercontent.com/bds-modding/bds-docs/main/logo.png",
    siteTitle: "BDS Docs",

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Welcome to BDS Docs',
        items: [
          { text: 'What are the BDS Docs?', link: '/' }
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
