<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "~/components/structure/TheFooter.vue";
import TopHeader from "~/components/structure/TopHeader.vue";
import "@/assets/main.css";

export default defineComponent({
    name: "default-layout",
    components: {
        TopHeader,
        TheFooter,
    },
});
</script>

<template>
    <div>
        <div
            class="py-5 w-5/6 mx-auto md:(sticky bg-primary-900 bg-opacity-80 top-0 z-10 py-2 px-5)"
        >
            <TopHeader />
        </div>
        <main class="min-h-screen mb-5">
            <Nuxt />
        </main>
        <TheFooter />
    </div>
</template>
