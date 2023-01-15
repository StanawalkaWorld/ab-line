<script setup lang="ts">
const props = withDefaults(defineProps<{ icon?: string }>(), { icon: "" });

const emits = defineEmits<{
    (e: "click"): void;
}>();
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
