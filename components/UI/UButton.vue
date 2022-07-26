<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        icon: {
            required: false,
            type: String,
            default: "",
        },
        filled: {
            required: false,
            type: Boolean,
            default: true,
        },
    },
});
</script>

<template>
    <button class="py-2 px-4 rounded-md hover:cursor-pointer">
        <i v-if="icon.length > 0" :class="['bi', icon, 'mr-1']"></i>
        <slot />
    </button>
</template>
