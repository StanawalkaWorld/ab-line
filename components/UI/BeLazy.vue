<script setup lang="ts">
const props = withDefaults(
    defineProps<{ threshold?: number; animationClass?: string }>(),
    { threshold: 0.5, animationClass: "page" }
);

const targetElement = ref();
const { isVisible } = useIntersectionObserver(targetElement, {
    threshold: props.threshold,
});

// const callback = (
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver
// ): void => {
//     entries.forEach(({ isIntersecting }) => {
//         if (isIntersecting) {
//             wasShown.value = true;
//             observer.disconnect();
//         }
//     });
// };

// onMounted(() => {
//     const observer = new IntersectionObserver(callback, {
//         threshold: props.threshold,
//         root: document.querySelector("#app"),
//     });
//     observer.observe(targetElement.value);
// });
</script>

<template>
    <div
        ref="targetElement"
        :class="{ invisible: !isVisible, [animationClass]: isVisible }"
    >
        <slot />
    </div>
</template>
