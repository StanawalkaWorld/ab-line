<script>
import { defineComponent } from "vue";
import DoubleBlock from "@/components/UI/DoubleBlock.vue";

export default defineComponent({
    name: "ImagePowered",
    components: { DoubleBlock },
    props: {
        imgSrc: {
            type: String,
            default: "",
            required: false,
        },
        optClasses: {
            type: String,
            default: "",
            required: false,
        },
    },
});
</script>

<template>
    <div>
        <DoubleBlock class="container mx-auto" :class="optClasses">
            <template #left>
                <div class="px-5 xl:pr-10">
                    <h3
                        class="text-4xl md:text-6xl <md:text-center py-4 mb-10 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-rose-500 to-primary-500"
                    >
                        <slot name="header" />
                    </h3>
                    <h3 class="text-lg xl:text-xl text-justify">
                        <slot name="content" />
                    </h3>
                </div>
            </template>
            <template #right>
                <div
                    class="w-full h-prose bgimage bg-contain bg-blend-multiply bg-true-gray-400 right-0 <lg:hidden"
                    :style="{
                        backgroundImage: `url('${imgSrc}')`,
                    }"
                ></div>
            </template>
        </DoubleBlock>
    </div>
</template>
