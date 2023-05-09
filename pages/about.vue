<script setup lang="ts">
import type { ContactCardInfo } from "~/types/ContactCard";
import ContactCard from "~/components/UI/ContactCard.vue";

useHead({
    title: "O nas - A&B Line",
});

const contacts: ContactCardInfo[] = [
    {
        name: "Andrzej Barański",
        title: "Założyciel firmy",
        profilePicture: "https://picsum.photos/300/300.webp?random=1",
        contactInfo: [
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
            {
                name: "LinkedIn",
                icon: "bi-linkedin",
                link: "https://www.linkedin.com/in/andrzej-baranski-235643183",
            },
        ],
    },
];
</script>

<template>
    <div class="container mx-auto">
        <div class="text-center">
            <h1 class="text-6xl my-8">O nas</h1>
            <p class="px-6 text-lg">
                Nasza firma zajmuje się prowadzeniem aut 13,6. Świadczymy usługi
                w Polsce i całej Europie.
            </p>
        </div>
        <div class="text-center my-20">
            <h1 class="text-6xl my-8">Dane firmy</h1>
            <ul>
                <li>
                    <span class="font-semibold">Pełna nazwa:</span> A&B Line
                    Andrzej Barański
                </li>
                <li><span class="font-semibold">NIP:</span> 5811803184</li>
                <li><span class="font-semibold">REGON:</span> 220330804</li>
            </ul>
        </div>
        <div>
            <h1 class="text-6xl text-center my-8">Nasz zespół</h1>
            <div class="flex justify-center flex-wrap <sm:flex-col">
                <ContactCard
                    v-for="contact in contacts"
                    :key="contact.name"
                    :contact-info="contact"
                    class="mx-6 <sm:mb-10"
                />
            </div>
        </div>
    </div>
</template>
