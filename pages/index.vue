<script lang="ts">
import { defineComponent } from "vue";
import HeroBlock from "~/components/blocks/HeroBlock.vue";

export default defineComponent({
    setup() {
        return { msg: "Hello!" };
    },
    components: { HeroBlock },
});
</script>

<template>
    <div>
        <HeroBlock />
    </div>
</template>
