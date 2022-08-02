<script lang="ts">
import { defineComponent, ref } from "vue";
import { useIntersectionObserver } from "@/composables/intersection";
import { AnimationSet } from "~/types/AnimaitonSet";

export default defineComponent({
    name: "TripleBlock",

    props: {
        animations: {
            required: false,
            type: Object,
            default: () => ({}),
        },
    },

    setup(props) {
        const trigger = ref();
        const { isVisible } = useIntersectionObserver(trigger, {
            threshold: 0.4,
        });

        const defaultAnimations: AnimationSet = {
            header: "fade-slide-from-bottom-anim",
            left: "fade-slide-from-left-anim",
            middle: "fade-slide-from-bottom-anim",
            right: "fade-slide-from-right-anim",
        };

        return {
            isVisible,
            trigger,
            intersectionAnimations: {
                ...defaultAnimations,
                ...props.animations,
            },
        };
    },
});
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
