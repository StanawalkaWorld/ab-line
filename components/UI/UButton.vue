<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "UButton",
    props: {
        icon: {
            required: false,
            type: String,
            default: "",
        },
    },
    emits: ["click"],
});
</script>

<template>
    <button
        class="py-2 px-4 rounded-md hover:cursor-pointer"
        @click="$emit('click')"
    >
        <i v-if="icon.length > 0" :class="['bi', icon, 'mr-1']"></i>
        <slot />
    </button>
</template>
