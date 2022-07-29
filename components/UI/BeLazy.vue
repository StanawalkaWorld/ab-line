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
        const reveal = (): void => {
            wasShown.value = true;
        };
        const targetElement = ref();

        onMounted(() => {
            const observer = new IntersectionObserver(reveal, {
                threshold: 0.5,
            });

            observer.observe(targetElement.value);
        });

        return {
            wasShown,
            reveal,
            targetElement,
        };
    },
});
</script>

<template>
    <Transition :name="transitionName">
        <div v-show="wasShown" ref="targetElement">
            <slot />
        </div>
    </Transition>
</template>
