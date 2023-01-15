<script setup lang="ts">
import { useIntersectionObserver } from "@/composables/intersection";

const props = withDefaults(defineProps<{ threshold?: number }>(), {
    threshold: 0.5,
});

const trigger = ref();
const { isVisible } = useIntersectionObserver(trigger, {
    threshold: props.threshold,
});
</script>

<template>
    <div
        ref="trigger"
        class="flex <lg:flex-col items-center justify-center flex-wrap"
        :class="{ invisible: !isVisible }"
    >
        <div
            class="w-full"
            :class="{ 'fade-slide-from-bottom-anim': isVisible }"
        >
            <slot />
        </div>
        <div
            class="w-full lg:w-1/2"
            :class="{ 'fade-slide-from-left-anim': isVisible }"
        >
            <slot name="left" />
        </div>
        <div
            class="w-full lg:w-1/2"
            :class="{ 'fade-slide-from-right-anim': isVisible }"
        >
            <slot name="right" />
        </div>
    </div>
</template>
