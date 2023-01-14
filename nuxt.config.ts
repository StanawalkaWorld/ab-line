import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    app: {
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
    },

    css: ["~/assets/main.css"],

    modules: ["nuxt-windicss"],

    vue: {
        compilerOptions: {
            isCustomElement: (elem) => elem === "nobr",
        },
    },
});
