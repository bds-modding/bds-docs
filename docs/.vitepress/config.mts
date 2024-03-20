import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Loom API Documentation",
  description: "A documentation helping modders to learn the Loom API",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
