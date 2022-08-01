<script lang="ts">
import { defineComponent } from "vue";
import type { ContactCardInfo } from "@/types/ContactCard";
import ContactCard from "~/components/UI/ContactCard.vue";

export default defineComponent({
    name: "AboutPage",
    head: {
        title: "O nas - A&B Line",
    },
    setup() {
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
                ],
            },
            {
                name: "Bartek Mroczkowski",
                profilePicture: "https://picsum.photos/300/300.webp?random=2",
                contactInfo: [
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
                ],
            },
        ];
        return {
            contacts,
        };
    },
    components: { ContactCard },
});
</script>

<template>
    <div class="container mx-auto">
        <div class="mb-20">
            <h1 class="text-6xl text-center my-8">O nas</h1>
            <p class="px-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci dolore quas maiores tempora neque, error in. Aspernatur
                ab dolorem voluptate facere, dolores consequuntur atque cumque
                vero ipsa illo sit neque tempora? Suscipit error optio delectus
                ullam doloremque ut rem enim, dolores nihil deleniti cum et
                sequi, tenetur, quia aut natus.
            </p>
        </div>
        <div>
            <h1 class="text-6xl text-center my-8">Nasz zespół</h1>
            <div class="flex justify-center flex-wrap <md:flex-col">
                <ContactCard
                    v-for="contact in contacts"
                    :key="contact.name"
                    :contact-info="contact"
                    class="mx-6 <md:mb-6"
                />
            </div>
        </div>
    </div>
</template>
