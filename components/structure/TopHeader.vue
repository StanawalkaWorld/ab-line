<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "top-header",
});
</script>

<template>
    <header class="container mx-auto">
        <NavLink to="/">
            <img
                src="@/assets/img/logo/full.svg"
                alt="A&B Line logo"
                class="p-1 h-20"
            />
        </NavLink>
    </header>
</template>
