<script>
import { useRoute } from "@nuxtjs/composition-api";
import { defineComponent } from "vue";
import UButton from "~/components/UI/UButton.vue";

export default defineComponent({
    name: "ErrorPage",
    props: ["error"],
    setup() {
        const route = useRoute();
        return {
            route,
        };
    },
    components: { UButton },
});
</script>

<template>
    <div class="text-center">
        <h1 class="text-6xl my-10" v-if="error.statusCode === 404">
            Nie znaleziono podstrony "{{ route.path }}".
        </h1>
        <h1 class="text-6xl my-10" v-else>{{ error.message }}</h1>
        <p class="text-xl">
            Wygląda na to, że wystąpił błąd podczas nawigacji.
        </p>
        <NuxtLink to="/">
            <UButton
                class="text-2xl text-primary-200 border-2 border-primary-200 mt-6"
                >Wróć na stronę główną</UButton
            >
        </NuxtLink>
    </div>
</template>
