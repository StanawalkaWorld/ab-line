export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "A&B Line Andrzej Barański",
        htmlAttrs: {
            lang: "pl",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Transport krajowy A&B Line Andrzej Barański.",
            },
            { name: "author", content: "Dawid Barański" },
            {
                name: "keywords",
                content:
                    "transport, polska, krajowy, tir, ciężarówka, ciezarowka, abline, a&b, a8b, przewóz, pomorskie, profesjonalne, prowadzenie, aut 13 6, europa, europie, austrii, austria",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/main.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@/plugins/bs-icons.js", "@/plugins/flag-icons.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "nuxt-windicss",
        "@nuxtjs/composition-api/module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    target: "static",
};
