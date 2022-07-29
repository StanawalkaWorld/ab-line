<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    name: "BeLazy",
    props: {
        transitionName: {
            required: false,
            default: "page",
            type: String,
        },
    },

    setup() {
        const wasShown = ref<boolean>(false);
        const targetElement = ref();

        const callback = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ): void => {
            entries.forEach(({ isIntersecting }) => {
                if (isIntersecting) {
                    console.log("👨‍🏭");
                    wasShown.value = true;
                    observer.disconnect();
                }
            });
        };

        onMounted(() => {
            const observer = new IntersectionObserver(callback, {
                threshold: 1,
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
    <div>
        <div ref="targetElement"></div>
        <Transition :name="transitionName">
            <slot v-if="wasShown" />
        </Transition>
    </div>
</template>
