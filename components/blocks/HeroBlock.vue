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
        class="py-5 min-h-96 bgimage bg-fixed bg-blend-multiply bg-true-gray-600 flex items-center"
        :style="{
            backgroundImage: `url('${require('@/assets/img/ciezarowka.webp')}')`,
        }"
    >
        <div
            class="flex <lg:flex-col justify-center items-center container mx-auto"
        >
            <div class="sm:w-1/2 <lg:(text-center mb-5)">
                <h1 class="text-6xl font-semibold mb-8">Nagłówek</h1>
                <p>Tekst motywujący do skorzystania z usług.</p>
                <NuxtLink to="/pricing">
                    <UButton
                        class="mt-10 border-2 border-primary-200 text-primary-200 font-semibold"
                        icon="bi-tag"
                        >Zobacz wycenę</UButton
                    >
                </NuxtLink>
            </div>
            <div
                class="sm:w-1/2 flex justify-center items-center <lg:text-center"
            >
                <div class="min-w-1/2 bg-primary-900 px-6 py-10">
                    <h2 class="text-4xl mb-5">Skontaktuj się z nami:</h2>
                    <address>
                        <p class="mb-1">Andrzej Barański</p>
                        <p>
                            <i class="bi bi-envelope mr-2 text-lg"></i>
                            <a href="mailto:abline.office@gmail.com"
                                >abline.office@gmail.com</a
                            >
                        </p>
                        <p>
                            <i class="bi bi-telephone mr-2 text-lg"></i>
                            <a href="tel:+48883766963">+48 883 766 963</a>
                        </p>
                    </address>
                </div>
            </div>
        </div>
    </section>
</template>
