<script setup lang="ts">
import Logo from "~/assets/img/logo/full-new.webp";

interface Navlink {
    name: string;
    to: string;
    icon?: string;
}

const navlinks: Navlink[] = [
    {
        name: "Strona główna",
        to: "/",
        icon: "bi-house-fill",
    },
    {
        name: "O nas",
        to: "/about",
        icon: "bi-person-fill",
    },
];
</script>

<template>
    <header class="flex flex-col md:flex-row fade-slide-from-top-delay">
        <NuxtLink to="/" class="flex justify-center <md:mb-5">
            <div
                class="bg-contain bg-center h-20 w-full md:w-20 bg-no-repeat"
                :style="{
                    backgroundImage: `url('${Logo}')`,
                }"
                aria-label="Logo strony, prowadzący do strony głównej"
            ></div>
        </NuxtLink>
        <nav class="flex flex-col md:flex-row items-center ml-10 children:mr-6">
            <NuxtLink
                v-for="link in navlinks"
                :key="link.name"
                :to="link.to"
                class="<md:w-full py-5 text-center md:(p-3 px-5) hover:(text-primary-100 bg-dominant-700 border-b-2 border-primary-200) transition-all duration-75"
            >
                <i :class="['bi', link.icon ?? '', 'text-sm', 'mr-1']"></i>
                {{ link.name }}
            </NuxtLink>
        </nav>
    </header>
</template>

<style scoped>
nav .nuxt-link-exact-active {
    @apply font-semibold bg-dominant-800 text-primary-50 rounded-md border-2 border-dominant-500;
}
</style>
