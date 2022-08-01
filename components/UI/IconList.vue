<script lang="ts">
import { defineComponent } from "vue";
import type { IconListItem } from "~/types/IconList";

export default defineComponent({
    name: "IconList",
    props: {
        items: {
            required: true,
            type: Object,
        },
        iconClasses: {
            required: false,
            type: String,
            default: "",
        },
    },
    setup(props) {
        const listitems: IconListItem[] = props.items as IconListItem[];

        return {
            listitems,
        };
    },
});
</script>

<template>
    <ul>
        <li v-for="item in listitems" :key="item.name">
            <i class="bi mr-2" :class="[item.icon, iconClasses]"></i>
            <a
                v-if="item.link"
                class="text-primary-200"
                :class="item.classes"
                :href="item.link"
                >{{ item.name }}</a
            >
            <span v-else :class="item.classes">{{ item.name }}</span>
        </li>
    </ul>
</template>
