<script lang="ts">
import { defineComponent } from "vue";
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import BeLazy from "~/components/UI/BeLazy.vue";
import DoubleBlock from "~/components/blocks/DoubleBlock.vue";

export default defineComponent({
    setup() {
        return { msg: "Hello!" };
    },
    components: { HeroBlock, BeLazy, DoubleBlock },
    head: {
        title: "Strona główna - A&B Line",
    },
});
</script>

<template>
    <div>
        <HeroBlock />

        <div class="h-screen"></div>

        <DoubleBlock>
            <h3 class="text-6xl text-center">Lorem ipsum dolor sit amet.</h3>
            <template #left>
                <h3 class="text-3xl text-justify p-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    numquam delectus, sunt ex dignissimos officia expedita
                    voluptate magni velit quos quam unde consequuntur pariatur
                    aliquid voluptas nihil vero deleniti minima voluptates
                    consequatur. Ratione vitae saepe atque voluptate amet rem
                    commodi mollitia iusto hic maxime, blanditiis ea veritatis.
                    Repudiandae, ipsam cumque.
                </h3>
            </template>
            <template #right>
                <div
                    :style="{
                        backgroundImage: `url('${require('@/assets/img/pexels-mike-b-trucking.webp')}')`,
                    }"
                    class="h-96 w-full bgimage bg-blend-multiply bg-true-gray-400 m-6"
                ></div>
            </template>
        </DoubleBlock>
    </div>
</template>
