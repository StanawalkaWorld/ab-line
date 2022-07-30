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
        <DoubleBlock class="container mx-auto py-20" :class="optClasses">
            <template #left>
                <div class="pr-10">
                    <h3
                        class="text-6xl py-4 mb-10 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-rose-500 to-primary-500"
                    >
                        <slot name="header" />
                    </h3>
                    <h3 class="text-xl text-justify">
                        <slot name="content" />
                    </h3>
                </div>
            </template>
            <template #right>
                <div
                    class="w-full h-prose bgimage bg-contain bg-blend-multiply bg-true-gray-400 right-0"
                    :style="{
                        backgroundImage: `url('${imgSrc}')`,
                    }"
                ></div>
            </template>
        </DoubleBlock>
    </div>
</template>
