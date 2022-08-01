<script>
import { defineComponent } from "vue";
import IconList from "./IconList.vue";

export default defineComponent({
    name: "ContactCard",
    components: { IconList },
    props: {
        contactInfo: {
            required: true,
            type: Object,
        },
    },
    setup() {},
});
</script>

<template>
    <div class="p-5 border border-primary-300 lg:rounded-md">
        <div class="flex <lg:(flex-col mb-5)">
            <div
                class="bg-contain bg-center bg-no-repeat w-40 h-40 mr-5 rounded-full"
                :style="{
                    backgroundImage: `url('${contactInfo.profilePicture}')`,
                }"
            ></div>
            <div class="h-full flex flex-col justify-between">
                <div class="mb-3">
                    <h4 class="text-xl font-semibold">
                        {{ contactInfo.name }}
                    </h4>
                    <p class="text-primary-100 text-sm">
                        {{ contactInfo.title }}
                    </p>
                </div>
                <div>
                    <IconList :items="contactInfo.contactInfo" />
                </div>
            </div>
        </div>
    </div>
</template>
