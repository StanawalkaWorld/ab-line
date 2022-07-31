<script lang="ts">
import { defineComponent } from "vue";
import { useSmoothScroll } from "@/composables/scroll";
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import TripleBlock from "../components/UI/TripleBlock.vue";
import UButton from "~/components/UI/UButton.vue";
import ImagePowered from "../components/UI/ImagePowered.vue";

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
        <TripleBlock class="my-20 xl:items-start" id="first-block">
            <template #header>
                <h3
                    class="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text p-3 mb-5 xl:mb-20 bg-gradient-to-r from-rose-500 to-primary-500"
                >
                    <!-- Gradient Header -->
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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

            <p class="text-lg xl:text-xl <xl:p-5 sm:text-justify">
                <!-- Main text -->
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                minus quis eaque accusantium maiores, fuga consequuntur unde
                esse soluta perferendis, quidem quia. Quisquam consequuntur
                reprehenderit eligendi, explicabo velit at debitis earum alias
                consequatur itaque omnis quod autem voluptate. Nobis, magni,
                commodi quis neque praesentium ex esse corrupti asperiores
                molestiae, officia earum nostrum. Qui saepe molestiae voluptatum
                sunt ab aliquid deserunt numquam possimus. Mollitia alias animi
                quibusdam doloribus nostrum, soluta molestias nesciunt, ex
                quidem consequuntur magni dicta saepe, eius inventore fugiat
                dolore voluptas? Molestiae aperiam deleniti reprehenderit quod
                consequatur voluptates ea!
            </p>

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
