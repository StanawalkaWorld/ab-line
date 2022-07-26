<script lang="ts">
import { defineComponent } from "vue";
import { useSmoothScroll } from "@/composables/scroll";
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import TripleBlock from "../components/blocks/TripleBlock.vue";
import UButton from "~/components/UI/UButton.vue";
import ImagePowered from "../components/blocks/ImagePowered.vue";
import GradientText from "~/components/UI/GradientText.vue";

export default defineComponent({
    setup() {
        const { scrollTo } = useSmoothScroll();

        const toFirstBlock = () => {
            scrollTo("#first-block");
        };

        const offer: string[] = [
            "Pewność dostarczenia ładunku do celu.",

            "Bezproblemową obsługę doładunków.",

            "Atrakcyjną cenę.",
        ];

        return {
            toFirstBlock,
            offer,
            ciezarowka: require("@/assets/img/ciezarowka-wycieta.webp"),
        };
    },
    components: { HeroBlock, TripleBlock, UButton, ImagePowered, GradientText },
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
                >Sprawdź, co oferujemy</UButton
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
            :threshold="0.6"
        >
            <template #left>
                <div
                    class="h-96 bg-contain bg-center m-10 bg-no-repeat filter brightness-75 <xl:hidden"
                    :style="{
                        backgroundImage: `url('${ciezarowka}')`,
                        transform: 'scaleX(-1)',
                    }"
                >
                    <!-- Left Image -->
                </div>
            </template>

            <GradientText
                class="text-4xl md:text-6xl text-center p-3 mb-5 xl:mb-20"
            >
                <!-- Gradient Header -->
                Co oferujemy?
            </GradientText>

            <div
                class="text-lg xl:text-xl <xl:p-10 font-roboto font-light flag-round"
            >
                <!-- Main text -->
                <p class="mb-5">
                    Oferujemy profesjonalne prowadzenie aut 13,6. Specjalizujemy
                    się w <span class="fi fi-at"></span> Austrii, ale nasze
                    usługi obejmują całą <span class="fi fi-eu"></span> Europę.
                </p>
            </div>

            <template #right>
                <div
                    class="h-96 bg-contain bg-center m-10 bg-no-repeat filter brightness-75 <xl:hidden"
                    :style="{
                        backgroundImage: `url('${ciezarowka}')`,
                    }"
                >
                    <!-- Right Image -->
                </div>
            </template>
        </TripleBlock>
        <ImagePowered
            :img-src="
                require('@/assets/img/pexels-marcin-jozwiak-trucks-lowres.webp')
            "
            class="my-20"
        >
            <template #header>
                Jeżeli wybierzesz naszą firmę, zapewnimy Tobie:
            </template>
            <template #content>
                <ul>
                    <li v-for="item in offer" :key="item" class="mb-3">
                        <span
                            class="bi bi-caret-right-fill text-primary-300"
                        ></span>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </template>
        </ImagePowered>
    </div>
</template>
