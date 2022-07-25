<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return { msg: "Hello!" };
    },
});
</script>

<template>
    <div>Hello! {{ msg }} <i class="bi bi-house-fill text-rose-600"></i></div>
</template>

