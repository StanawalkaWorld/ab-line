<script lang="ts">
import { defineComponent } from "vue";
import HeroBlock from "~/components/blocks/HeroBlock.vue";
import TripleBlock from "../components/UI/TripleBlock.vue";

export default defineComponent({
    setup() {
        return { msg: "Hello!" };
    },
    components: { HeroBlock, TripleBlock },
    head: {
        title: "Strona główna - A&B Line",
    },
});
</script>

<template>
    <div>
        <!-- Hero block -->
        <HeroBlock />
        <!-- First -->
        <TripleBlock class="mt-20">
            <template #header>
                <h3
                    class="text-6xl text-center font-bold text-transparent bg-clip-text p-3 bg-gradient-to-r from-rose-500 to-primary-500"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>
            </template>
            <template #left>
                <div
                    class="h-prose bg-contain bg-center m-10 bg-no-repeat filter brightness-75"
                    :style="{
                        backgroundImage: `url('${require('@/assets/img/ciezarowka-wycieta.webp')}')`,
                        transform: 'scaleX(-1)',
                    }"
                ></div>
            </template>

            <p class="text-2xl text-justify pb-20">
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
                    class="h-prose bg-contain bg-center m-10 bg-no-repeat filter brightness-75"
                    :style="{
                        backgroundImage: `url('${require('@/assets/img/ciezarowka-wycieta.webp')}')`,
                    }"
                ></div>
            </template>
        </TripleBlock>
    </div>
</template>
