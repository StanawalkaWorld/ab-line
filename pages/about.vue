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
    <div>
        <h1 class="text-6xl text-center my-6">O nas</h1>
        <div class="flex <lg:flex-col justify-around flex-wrap">
            <ContactCard
                v-for="contact in contacts"
                :key="contact.name"
                :contact-info="contact"
                class=""
            />
        </div>
    </div>
</template>
