<script lang="ts">
import { defineComponent, ref } from "vue";
import { useIntersectionObserver } from "@/composables/intersection";

export default defineComponent({
    name: "TripleBlock",

    setup() {
        const trigger = ref();
        const { isVisible } = useIntersectionObserver(trigger, {
            threshold: 0.4,
        });

        return {
            isVisible,
            trigger,
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
            :class="{ 'fade-slide-from-bottom-anim': isVisible }"
        >
            <slot name="header" />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ 'fade-slide-from-left-anim': isVisible }"
        >
            <slot name="left" />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ 'fade-slide-from-bottom-anim': isVisible }"
        >
            <slot />
        </div>
        <div
            class="w-full xl:w-1/3"
            :class="{ 'fade-slide-from-right-anim': isVisible }"
        >
            <slot name="right" />
        </div>
    </div>
</template>
