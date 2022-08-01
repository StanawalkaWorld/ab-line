<script lang="ts">
import { defineComponent } from "vue";
import UButton from "../UI/UButton.vue";

export default defineComponent({
    name: "HeroBlock",
    components: { UButton },
});
</script>

<template>
    <section
        class="py-6 px-2 min-h-96 bgimage bg-fixed bg-blend-multiply bg-true-gray-400 flex"
        :style="{
            backgroundImage: `url('${require('@/assets/img/pexels-mike-b-trucking.webp')}')`,
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
                class="sm:w-1/2 <lg:(text-center mb-6) fade-slide-from-left-anim"
            >
                <h1
                    class="text-4xl lg:text-6xl font-semibold mb-8 text-true-gray-200"
                >
                    Profesjonalna spedycja
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
                class="sm:w-1/2 flex justify-center items-center <lg:text-center fade-slide-from-right-anim"
            >
                <!-- Resizable block div, that packs all text -->
                <div class="min-w-1/2 sm:bg-primary-900 px-6 py-10 rounded-lg">
                    <h2 class="text-4xl mb-5">Skontaktuj się z nami:</h2>
                    <!-- Address tag making text italic -->
                    <address>
                        <p>
                            <!-- Name and lastname -->
                            <i class="bi bi-person mr-2 text-xl"></i>
                            <span class="text-lg font-semibold"
                                >Andrzej Barański</span
                            >
                        </p>
                        <p>
                            <!-- E-mail -->
                            <i class="bi bi-envelope mr-2 text-lg"></i>
                            <a
                                href="mailto:abline.office@gmail.com"
                                class="text-primary-200 text-lg"
                                >abline.office@gmail.com</a
                            >
                        </p>
                        <p>
                            <!-- Phone number -->
                            <i class="bi bi-telephone mr-2 text-lg"></i>
                            <a
                                href="tel:+48883766963"
                                class="text-primary-200 text-lg"
                                >+48 883 766 963</a
                            >
                        </p>
                    </address>
                </div>
            </div>
        </div>
    </section>
</template>
