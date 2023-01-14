<script setup lang="ts">
import type { IconListItem } from "~/types/IconList";

const props = withDefaults(
    defineProps<{ items: IconListItem[]; iconClasses?: string }>(),
    { iconClasses: "" }
);
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item.name">
            <i class="bi mr-2" :class="[item.icon, iconClasses]"></i>
            <a
                v-if="item.link"
                class="text-primary-200"
                :class="item.classes"
                :href="item.link"
                target="_blank"
                >{{ item.name }}</a
            >
            <span v-else :class="item.classes">{{ item.name }}</span>
        </li>
    </ul>
</template>
