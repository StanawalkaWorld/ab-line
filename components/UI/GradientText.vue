<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "GradientText",
});
</script>

<template>
    <h1
        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-primary-500"
    >
        <slot />
    </h1>
</template>
