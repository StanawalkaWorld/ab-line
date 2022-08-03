<script lang="ts">
import { defineComponent } from "vue";
import UButton from "../UI/UButton.vue";
import IconList from "../UI/IconList.vue";
import type { IconListItem } from "~/types/IconList";

export default defineComponent({
    name: "HeroBlock",
    components: { UButton, IconList },

    setup() {
        const andrzejList: IconListItem[] = [
            {
                name: "Andrzej Barański",
                icon: "bi-person",
                classes: "font-semibold",
            },
            {
                name: "abline.office@gmail.com",
                icon: "bi-envelope",
                link: "mailto:abline.office@gmail.com",
            },
            {
                name: "+48 883 766 963",
                icon: "bi-telephone",
                link: "tel:+48883766963",
            },
        ];
        const bartekList: IconListItem[] = [
            {
                name: "Bartek Mroczkowski",
                icon: "bi-person",
                classes: "font-semibold",
            },
            {
                name: "bm.abline@gmail.com",
                icon: "bi-envelope",
                link: "mailto:bm.abline@gmail.com",
            },
            {
                name: "+48 517 615 625",
                icon: "bi-telephone",
                link: "tel:+48517615625",
            },
        ];
        return {
            andrzejList,
            bartekList,
        };
    },
});
</script>

<template>
    <section
        class="py-6 px-2 min-h-96 bgimage bg-fixed bg-blend-multiply bg-true-gray-500 flex"
        :style="{
            backgroundImage: `url('${require('@/assets/img/pexels-mike-b-trucking-lowres.webp')}')`,
        }"
    >
        <!-- ⬆ Main section tag with a dimmed image -->

        <!-- ⬇ Flex container centered, that manages 2 blocks inside -->
        <div
            class="flex <lg:flex-col justify-center items-center container mx-auto"
        >
            <!-- Half-width container for a header and motivational paragraph -->
            <div
                ref="leftBlock"
                class="sm:w-1/2 <lg:(text-center mb-6) fade-slide-from-left-delay"
            >
                <h1
                    class="text-4xl lg:text-6xl font-semibold mb-8 text-true-gray-200"
                >
                    Profesjonalne prowadzenie aut
                    <nobr
                        >w Europie
                        <span
                            class="fi fi-pl rounded-md text-3xl lg:text-5xl"
                        ></span>
                        <span
                            class="fi fi-eu rounded-md text-3xl lg:text-5xl"
                        ></span
                    ></nobr>
                </h1>
                <p class="text-lg">
                    Zapewniamy pewną dostawę towaru z punktu A do punktu B.
                </p>
                <!-- Button link into pricing page -->
                <NuxtLink to="/pricing">
                    <UButton
                        class="mt-10 border-2 border-primary-200 text-primary-200 font-semibold"
                        icon="bi-tag"
                        >Zobacz wycenę</UButton
                    >
                </NuxtLink>
            </div>
            <!-- Half-width block for contact information -->
            <div
                class="sm:w-1/2 flex justify-center items-center <lg:text-center fade-slide-from-right-delay"
            >
                <!-- Resizable block div, that packs all text -->
                <div class="min-w-1/2 sm:bg-primary-900 px-6 py-10 rounded-lg">
                    <h2 class="text-4xl mb-5">Skontaktuj się z nami:</h2>
                    <!-- Address tag making text italic -->
                    <address
                        class="divide-primary-50 text-lg <xl:divide-y-2 xl:(flex divide-x-2)"
                    >
                        <IconList :items="andrzejList" />
                        <IconList
                            class="<xl:(mt-5 pt-5) xl:(ml-5 pl-5)"
                            :items="bartekList"
                        />
                    </address>
                </div>
            </div>
        </div>
    </section>
</template>
