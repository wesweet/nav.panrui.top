// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["@element-plus/nuxt", { elementPlus: {} }]],
  devtools: { enabled: true },
  css: ["~/assets/less/global.less"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "https://static.panrui.top/logo/rui.png" }],
    },
  },
});
