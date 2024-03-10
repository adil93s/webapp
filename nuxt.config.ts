// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    // @ts-ignore
    app: {
        rootId: "webapp",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            meta: [{ name: "description", content: "MasterAnnonce" }],
        },
    },
    runtimeConfig: {
        public: {
            appEnv: process.env.NUXT_APP_ENV,
            apiAuthUrl: process.env.NUXT_API_AUTH_URL,
            apiDomainUrl: process.env.NUXT_API_DOMAIN_URL,
        },
    },
    routeRules: {
        "/**": { swr: 0 },
    },
    css: ["~/assets/css/app.css"],
    modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
        customRoutes: "config",
        pages: {
            annonces: { fr: "/annonces" },
            "annonces/[slug]": { fr: "/annonces/[slug]" },
            login: { fr: "/auth/login" },
            logout: { fr: "/auth/logout" },
            index: { fr: "/" },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [{ src: "~/plugins/vuex.ts", ssr: false, mode: "client" }],
});
