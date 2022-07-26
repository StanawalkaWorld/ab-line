<script lang="ts">
import { defineComponent } from "vue";

interface Navlink {
    name: string;
    to: string;
    icon?: string;
}

export default defineComponent({
    name: "TopHeader",
    setup() {
        const navlinks: Navlink[] = [
            {
                name: "Wycena",
                to: "/pricing",
                icon: "bi-tag-fill",
            },
            {
                name: "Kontakt",
                to: "/contact",
                icon: "bi-telephone-fill",
            },
        ];

        return {
            navlinks,
        };
    },
});
</script>

<template>
    <header class="container mx-auto flex flex-col md:flex-row">
        <NuxtLink to="/">
            <img
                src="@/assets/img/logo/full-white.svg"
                alt="A&B Line logo"
                class="h-20"
            />
        </NuxtLink>
        <nav class="flex flex-col md:flex-row items-center ml-10 children:mr-6">
            <NuxtLink
                v-for="link in navlinks"
                :key="link.name"
                :to="link.to"
                class="py-1 px-3 hover:(text-primary-200 border-b-2 border-primary-200) transition-all duration-75"
            >
                <i :class="['bi', link.icon ?? '', 'text-sm', 'mr-1']"></i>
                {{ link.name }}
            </NuxtLink>
        </nav>
    </header>
</template>

<style scoped>
nav .nuxt-link-exact-active {
    @apply font-semibold bg-primary-300 text-primary-50 rounded-md border-none;
}
</style>
