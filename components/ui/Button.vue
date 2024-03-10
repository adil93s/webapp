<template>
    <button class="inline-flex items-center rounded-md gap-x-2 px-6 py-2" :class="customClass" @click="click">
        <slot name="left-icon"></slot>
        <span v-if="hasText && label" class="font-inter font-bold grow">{{ label }}</span>
        <slot v-else></slot>
        <slot name="icon"></slot>
        <span v-if="loading">
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    props: {
        label: {
            type: String,
            required: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        outlineColor: {
            type: String,
        },
        type: {
            type: String,
            default: "primary",
            validator: (value: string) => {
                return ["primary", "secondary", "tertiary", "white", "grey", "transparent"].includes(value);
            },
        },
        fontSize: {
            type: String,
            default: "text-base",
        },
        paddingX: {
            type: String,
            default: "px-4",
        },
        paddingY: {
            type: String,
            default: "py-2",
        },
        hasText: {
            type: Boolean,
            default: true,
        },
        shadow: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        customClass() {
            let computedClass: string[] = [this.fontSize, this.paddingX, this.paddingY];

            if (this.type === "inverse") {
                computedClass.push("btn-primary-inverse");
            } else if (this.type === "secondary") {
                computedClass.push("btn-secondary");
            } else if (this.type === "grey") {
                computedClass.push("btn-grey");
            } else if (this.type === "danger") {
                computedClass.push("btn-danger");
            } else {
                computedClass.push("btn-primary");
            }

            return computedClass;
        },
    },
    methods: {
        click() {
            this.$emit("button-click-event");
        },
    },
});
</script>
