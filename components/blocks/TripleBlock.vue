<script setup lang="ts">
import { useIntersectionObserver } from "@/composables/intersection";

interface AnimationSetProps {
    header?: string;
    left?: string;
    middle?: string;
    right?: string;
}

const props = withDefaults(
    defineProps<{ threshold?: number; animations?: AnimationSetProps }>(),
    { threshold: 0.5, animations: () => ({}) }
);

const trigger = ref();
const { isVisible } = useIntersectionObserver(trigger, {
    threshold: props.threshold,
});

const defaultAnimations = {
    header: "fade-slide-from-bottom-anim",
    left: "fade-slide-from-left-anim",
    middle: "fade-slide-from-bottom-anim",
    right: "fade-slide-from-right-anim",
};

const intersectionAnimations = {
    header: props.animations.header ?? defaultAnimations.header,
    left: props.animations.left ?? defaultAnimations.left,
    middle: props.animations.middle ?? defaultAnimations.middle,
    right: props.animations.right ?? defaultAnimations.right,
};
</script>

<template>
    <div
        ref="trigger"
        class="flex <xl:flex-col items-center justify-center flex-wrap"
        :class="{ invisible: !isVisible }"
    >
        <div
            class="w-full"
            :class="{ [intersectionAnimations.header]: isVisible }"
        >
            <slot name="header" />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ [intersectionAnimations.left]: isVisible }"
        >
            <slot name="left" />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ [intersectionAnimations.middle]: isVisible }"
        >
            <slot />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ [intersectionAnimations.right]: isVisible }"
        >
            <slot name="right" />
        </div>
    </div>
</template>
