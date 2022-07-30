import { onMounted, ref, unref } from "vue"
import type { MaybeRef } from "~/types/monad";

export const useIntersectionObserver = (el: MaybeRef<Element>, options?: IntersectionObserverInit) => {
    const isVisible = ref<boolean>(false);
    
    const optionsDefault: IntersectionObserverInit = {
        root: document.querySelector("#app"),
        threshold: 0.5,
        ...options
    }
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        if(entries[0].isIntersecting) {
            observer.disconnect();
            isVisible.value = true;
        }
    }

    onMounted(() => {
        const observer = new IntersectionObserver(callback, optionsDefault);

        observer.observe(unref(el));
    })

    return {
        isVisible
    }
}