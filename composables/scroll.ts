import { unref } from "vue";
import { MaybeRef, monadRun } from "~/types/monad";

export const useSmoothScroll = () => {
    const scrollTo = (el: MaybeRef<string>) => {
        if (process.client) {
            monadRun(document.querySelector(unref(el)), (element) => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            });
        }
    };

    const scrollToElement = (el: MaybeRef<Element>) => {
        unref(el).scrollIntoView({
            behavior: "smooth",
        });
    };

    return {
        scrollTo,
        scrollToElement,
    };
};
