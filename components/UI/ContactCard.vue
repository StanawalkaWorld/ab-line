<script setup lang="ts">
import { IconListItem } from "~~/types/IconList";
import IconList from "./IconList.vue";

const props = defineProps<{
    contactInfo: {
        profilePicture: string;
        name: string;
        title: string;
        contactInfo: IconListItem[];
    };
}>();
</script>

<template>
    <div class="rounded-md flex flex-col items-center">
        <div
            class="bg-contain bg-center bg-no-repeat w-40 h-40 rounded-full"
            :style="{
                backgroundImage: `url('${contactInfo.profilePicture}')`,
            }"
        ></div>
        <div
            class="flex flex-col py-6 text-center border-b border-true-gray-400"
        >
            <div>
                <h4 class="text-xl font-semibold">
                    {{ contactInfo.name }}
                </h4>
                <p class="text-primary-100 text-sm min-h-5">
                    {{ contactInfo.title }}
                </p>
            </div>
        </div>
        <div class="mt-6">
            <IconList :items="contactInfo.contactInfo" />
        </div>
    </div>
</template>
