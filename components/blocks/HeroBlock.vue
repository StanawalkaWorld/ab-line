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
        class="py-5 min-h-96 bgimage bg-fixed bg-blend-multiply bg-true-gray-600"
        :style="{
            backgroundImage: `url('${require('@/assets/img/ciezarowka.webp')}')`,
        }"
    >
        <div class="flex justify-center container mx-auto">
            <div class="w-1/2">
                <h1 class="text-6xl font-semibold mb-8">Nagłówek</h1>
                <p>Tekst motywujący do skorzystania z usług.</p>
                <UButton
                    class="mt-10 border-2 border-primary-200 text-primary-200 font-semibold"
                    icon="bi-tag"
                    >Zobacz wycenę</UButton
                >
            </div>
            <div class="w-1/2">
                <h2 class="text-4xl">Skontaktuj się z nami</h2>
                <address>
                    <p>Andrzej Barański</p>
                    <p>
                        <a href="mailto:abline.office@gmail.com"
                            >abline.office@gmail.com</a
                        >
                    </p>
                    <p><a href="tel:+48883766963">+48 883 766 963</a></p>
                </address>
            </div>
        </div>
    </section>
</template>
