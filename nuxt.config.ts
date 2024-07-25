// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@element-plus/nuxt",
      {
        elementPlus: {
          icon: true,
        },
      },
    ],
    ["@vant/nuxt", { vant: {} }],
    ["nuxt-icon", {}],
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:3000",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/less/global.less"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://static.panrui.top/logo/rui.png",
        },
      ],
    },
  },
});
