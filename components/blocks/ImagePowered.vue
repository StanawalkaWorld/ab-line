<script>
import { defineComponent } from "vue";
import GradientText from "../UI/GradientText.vue";
import DoubleBlock from "./DoubleBlock.vue";

export default defineComponent({
    name: "ImagePowered",
    components: { DoubleBlock, GradientText },
    props: {
        imgSrc: {
            type: String,
            default: "",
            required: false,
        },
    },
});
</script>

<template>
    <DoubleBlock class="container mx-auto">
        <template #left>
            <div class="px-5 xl:pr-10">
                <GradientText
                    class="text-4xl md:text-6xl <md:text-center py-4 mb-10"
                >
                    <slot name="header" />
                </GradientText>
                <p class="text-lg xl:text-xl text-justify">
                    <slot name="content" />
                </p>
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
</template>
