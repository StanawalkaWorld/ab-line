import { unref } from "vue";
import { MaybeRef, monadRun } from "~/types/monad";

export const useSmoothScroll = () => {
    
    const scrollTo = (el: MaybeRef<string>) => {
        if(process.client) {
            monadRun(document.querySelector(unref(el)), (element) => {
                element.scrollTo({
                    behavior: "smooth",
                })
            })
        }
    }

    const scrollToElement = (el: MaybeRef<Element>) => {
        unref(el).scrollTo({
            behavior: "smooth"
        });
    }

    return {
        scrollTo,
        scrollToElement
    }
}