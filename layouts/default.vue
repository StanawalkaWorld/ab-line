<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "~/components/structure/TheFooter.vue";
import TopHeader from "~/components/structure/TopHeader.vue";

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
        <TopHeader />
        <main>
            <Nuxt />
        </main>
        <TheFooter />
    </div>
</template>
