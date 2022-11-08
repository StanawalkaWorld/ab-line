<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "~/components/structure/TheFooter.vue";
import TopHeader from "~/components/structure/TopHeader.vue";
import "@/assets/main.css";
import { useSmoothScroll } from "~/composables/scroll";

export default defineComponent({
    name: "default-layout",
    components: {
        TopHeader,
        TheFooter,
    },
    setup() {
        const { scrollTo } = useSmoothScroll();

        function toTop() {
            scrollTo("#very-top");
        }

        return {
            toTop,
        };
    },
});
</script>

<template>
    <div>
        <div id="very-top"></div>
        <div
            class="py-5 w-5/6 mx-auto md:(sticky bg-primary-900 bg-opacity-90 top-0 z-10 py-2 px-5)"
        >
            <TopHeader />
        </div>
        <main class="min-h-screen mb-5">
            <Nuxt />
        </main>
        <TheFooter />
        <button
            class="text-3xl md:text-4xl fixed right-4 md:right-8 bottom-16 md:bottom-8 transition-all ease-linear bg-primary-600 hover:bg-primary-400 rounded-full w-12 h-12 md:(w-14 h-14)"
            @click="toTop"
            aria-label="Wróć na samą górę strony."
        >
            <i class="bi bi-arrow-up" aria-hidden="true"></i>
        </button>
    </div>
</template>
