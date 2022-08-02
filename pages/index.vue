<script lang="ts">
import { defineComponent } from "vue";
import { useSmoothScroll } from "@/composables/scroll";
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import TripleBlock from "../components/blocks/TripleBlock.vue";
import UButton from "~/components/UI/UButton.vue";
import ImagePowered from "../components/blocks/ImagePowered.vue";

export default defineComponent({
    setup() {
        const { scrollTo } = useSmoothScroll();

        const toFirstBlock = () => {
            scrollTo("#first-block");
        };

        return {
            toFirstBlock,
        };
    },
    components: { HeroBlock, TripleBlock, UButton, ImagePowered },
    head: {
        title: "Strona główna - A&B Line",
    },
});
</script>

<template>
    <div>
        <!-- Hero block -->
        <HeroBlock />
        <!-- Downwards link -->
        <div class="flex items-center justify-center py-10">
            <UButton
                icon="bi-arrow-down"
                class="text-primary-200 mx-auto font-semibold"
                @click="toFirstBlock"
                >Zobacz naszą ofertę</UButton
            >
        </div>
        <!-- First Content block -->
        <TripleBlock
            class="my-20 xl:items-start"
            id="first-block"
            :animations="{
                left: 'drive-in-from-left',
                right: 'drive-in-from-right',
            }"
        >
            <template #header>
                <h3
                    class="text-4xl md:text-6xl xl:w-screen-md mx-auto text-center font-bold text-transparent bg-clip-text p-3 mb-5 xl:mb-20 bg-gradient-to-r from-rose-500 to-primary-500"
                >
                    <!-- Gradient Header -->
                    Co oferujemy?
                </h3>
            </template>
            <template #left>
                <div
                    class="h-96 bg-contain bg-center m-10 bg-no-repeat filter brightness-75 <xl:hidden"
                    :style="{
                        backgroundImage: `url('${require('@/assets/img/ciezarowka-wycieta.webp')}')`,
                        transform: 'scaleX(-1)',
                    }"
                >
                    <!-- Left Image -->
                </div>
            </template>

            <div
                class="text-lg xl:text-xl <xl:p-10 font-roboto font-light flag-round"
            >
                <!-- Main text -->
                <p class="mb-5">
                    Oferujemy profesjonalne prowadzenie aut 13,6. Specjalizujemy
                    się w <span class="fi fi-at"></span> Austrii, ale nasze
                    usługi obejmują również całą
                    <span class="fi fi-eu"></span> Europę. Zapewniamy:
                </p>
                <ul class="list-disc <lg:text-center">
                    <li>Pewność dostarczenia ładunku do celu.</li>
                    <li>Bezproblemową obsługę doładunków.</li>
                    <li>Atrakcyjną cenę.</li>
                </ul>
            </div>

            <template #right>
                <div
                    class="h-96 bg-contain bg-center m-10 bg-no-repeat filter brightness-75 <xl:hidden"
                    :style="{
                        backgroundImage: `url('${require('@/assets/img/ciezarowka-wycieta.webp')}')`,
                    }"
                >
                    <!-- Right Image -->
                </div>
            </template>
        </TripleBlock>
        <ImagePowered
            :img-src="require('@/assets/img/pexels-marcin-jozwiak-trucks.webp')"
            class="my-20"
        >
            <template #header>
                Lorem ipsum dolor sit amet consectetur.
            </template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat laudantium libero vel alias. Blanditiis deserunt porro
                dolore eum magnam commodi veritatis quidem laboriosam placeat
                necessitatibus distinctio quos et dolorem nesciunt, facilis
                officia delectus? Inventore quam aliquam quae voluptatibus,
                assumenda natus debitis quasi soluta. Quis architecto non
                reprehenderit expedita nostrum, quidem provident nesciunt rerum
                perspiciatis facilis inventore fugiat voluptatem mollitia porro!
            </template>
        </ImagePowered>
    </div>
</template>
