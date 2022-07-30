<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: "BeLazy",
    props: {
        animationClass: {
            required: false,
            default: "page",
            type: String,
        },
        treshold: {
            required: false,
            default: 0.5,
            type: Number,
        },
    },

    setup(props) {
        const wasShown = ref<boolean>(false);
        const targetElement = ref();

        const callback = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ): void => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    wasShown.value = true;
                    observer.disconnect();
                }
            });
        };

        onMounted(() => {
            const observer = new IntersectionObserver(callback, {
                threshold: props.treshold,
                root: document.querySelector("#app"),
            });
            observer.observe(targetElement.value);
        });

        return {
            wasShown,
            targetElement,
        };
    },
});
</script>

<template>
    <div
        ref="targetElement"
        :class="{ invisible: !wasShown, [animationClass]: wasShown }"
    >
        <slot />
    </div>
</template>
