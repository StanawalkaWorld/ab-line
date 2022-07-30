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
        <TripleBlock>
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

            <p class="text-2xl text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                molestiae ut quia exercitationem voluptatibus ipsa nisi repellat
                iure aut reiciendis consequuntur quae, quis quidem aperiam rem
                officiis nemo atque. Architecto iusto cum autem assumenda est
                quos esse dolores molestiae inventore natus doloremque odio
                provident, quaerat quod temporibus possimus doloribus quae eum
                impedit aliquid debitis nulla. Possimus ipsum culpa laudantium
                neque odit placeat eum nisi asperiores! Ratione molestias labore
                cum rem reprehenderit! Porro corporis quae amet fugit, ipsum
                suscipit molestiae nostrum officia magni voluptatem illo
                obcaecati voluptatibus autem maxime ipsa tempora.
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
