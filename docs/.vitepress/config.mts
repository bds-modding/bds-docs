import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Loom API Docs",
  description: "A documentation helping modders to learn the Loom API",
  base: "/docs/",
  themeConfig: {
    logo: "https://raw.githubusercontent.com/LoomMC/docs/main/logo.png",
    siteTitle: "Loom API Documentation",

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
      { icon: 'github', link: 'https://github.com/LoomMC/loom' }
    ],

    search: {
      provider: "local"
    }
  }
})
