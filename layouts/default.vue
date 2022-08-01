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
            class="py-5 md:(sticky bg-primary-900 bg-opacity-50 top-0 z-10 py-2)"
        >
            <TopHeader />
        </div>
        <main class="min-h-screen mb-5">
            <Nuxt />
        </main>
        <TheFooter />
    </div>
</template>
