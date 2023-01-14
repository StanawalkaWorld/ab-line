<script setup lang="ts">
import IconList from "../UI/IconList.vue";
import type { IconListItem } from "~/types/IconList";
import Logo from "~/assets/img/logo/short-new.webp";

interface IconLink {
    icon: string;
    iconColor?: string;
    href: string;
}

const contactList: IconListItem[] = [
    {
        name: "abline.office@gmail.com",
        icon: "bi-envelope-fill",
        link: "mailto:abline.office@gmail.com",
    },
    {
        name: "+48 883 766 963",
        icon: "bi-telephone-fill",
        link: "tel:+48883766963",
    },
];

const underLogoLinks: IconLink[] = [
    {
        icon: "bi-facebook",
        href: "https://www.facebook.com",
    },
    {
        icon: "bi-linkedin",
        href: "https://www.linkedin.com/in/andrzej-baranski-235643183",
    },
];
</script>

<template>
    <footer class="bg-black text-white flex <lg:(flex-col items-center) p-10">
        <div class="footer-block <lg:w-full flex-col">
            <div
                class="w-1/2 h-20 bg-contain bg-no-repeat bg-center"
                :style="{
                    backgroundImage: `url('${Logo}')`,
                }"
            ></div>
            <div class="w-full flex children:block justify-evenly">
                <a
                    v-for="link in underLogoLinks"
                    :key="link.href"
                    :href="link.href"
                    target="_blank"
                    class="text-3xl"
                    :style="{ color: link.iconColor }"
                >
                    <i class="bi" :class="link.icon"></i>
                </a>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5 <lg:text-center">
                <h3 class="footer-header">Nawigacja:</h3>
                <ul class="text-lg">
                    <li>
                        <NuxtLink to="/">Strona główna</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">O nas</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">
                    <i class="bi bi-building"></i> Dane firmy:
                </h3>
                <ul>
                    <li>
                        <span class="font-semibold">Pełna nazwa</span>: A&B Line
                        Andrzej Barański
                    </li>
                    <li><span class="font-semibold">NIP</span>: 5811803184</li>
                    <li><span class="font-semibold">REGON</span>: 220330804</li>
                </ul>
            </div>
        </div>
        <div class="footer-block">
            <div class="p-5">
                <h3 class="footer-header">
                    <i class="bi bi-person"></i> Kontakt:
                </h3>
                <address class="text-lg">
                    <IconList :items="contactList" />
                </address>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-block {
    @apply lg:flex-grow flex justify-center items-center my-5;
}
.footer-header {
    @apply text-xl text-center font-semibold mb-2;
}

.nuxt-link-exact-active {
    @apply text-rose-500 font-bold;
}
</style>
