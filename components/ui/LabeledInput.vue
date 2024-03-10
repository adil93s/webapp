<template>
    <div class="flex flex-col gap-y-1 font-inter">
        <div class="flex gap-x-2">
            <label class="text-secondary dark:text-white font-semibold text-sm md:text-base">{{ label }}</label>
            <slot name="popover"></slot>
        </div>
        <div class="group">
            <div class="flex relative w-full" :class="{ 'items-start': typeInput === 'textarea', 'items-center': typeInput !== 'textarea' }">
                <div v-if="hasIcon" class="absolute flex h-10 justify-center items-center content-center rounded-l-md aspect-square">
                    <slot name="icon"></slot>
                </div>
                <input class="w-full bg-light-3 text-grey placeholder:text-grey !ring-2 ring-transparent !border-0 !inner-border-0 rounded-lg" :class="[errors.length === 0 ? 'focus:ring-secondary' : 'focus:ring-danger', hasAction ? 'pr-8' : 'pr-2', hasIcon ? 'pl-12' : 'pl-4']" :value="modelValue" :placeholder="placeholder" :type="typeInput" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
                <slot name="action"></slot>
            </div>
        </div>
        <Transition mode="in-out">
            <div v-if="errors.length > 0">
                <div class="py-1 text-danger font-inter text-sm" v-for="error of errors" :key="error.$uid">
                    <div class="flex gap-x-1 items-center content-center">
                        <svg class="fill-danger" width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.25 4C10.9404 4 11.5 4.52855 11.5 5.18056V11.3194C11.5 11.9714 10.9404 12.5 10.25 12.5C9.55964 12.5 9 11.9714 9 11.3194V5.18056C9 4.52855 9.55964 4 10.25 4ZM10.25 16C10.9404 16 11.5 15.4404 11.5 14.75C11.5 14.0596 10.9404 13.5 10.25 13.5C9.55964 13.5 9 14.0596 9 14.75C9 15.4404 9.55964 16 10.25 16Z"
                            />
                        </svg>
                        <span>{{ error.$message }}</span>
                    </div>
                </div>
            </div>
        </Transition>
        <Transition mode="in-out">
            <div v-if="messages.length > 0">
                <div class="py-1 text-success font-inter text-sm" v-for="(message, index) in messages" :key="index">
                    <div class="flex gap-x-1 items-center content-center">
                        <svg class="fill-sucess" width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.25 4C10.9404 4 11.5 4.52855 11.5 5.18056V11.3194C11.5 11.9714 10.9404 12.5 10.25 12.5C9.55964 12.5 9 11.9714 9 11.3194V5.18056C9 4.52855 9.55964 4 10.25 4ZM10.25 16C10.9404 16 11.5 15.4404 11.5 14.75C11.5 14.0596 10.9404 13.5 10.25 13.5C9.55964 13.5 9 14.0596 9 14.75C9 15.4404 9.55964 16 10.25 16Z"
                            />
                        </svg>
                        <span>{{ message }}</span>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
        },
        typeInput: {
            type: String,
            default: "text",
        },
        errors: {
            type: Array<any>,
            required: false,
            default: [],
        },
        messages: {
            type: Array<any>,
            required: false,
            default: [],
        },
        hasIcon: {
            type: Boolean,
            default: true,
        },
        hasAction: {
            type: Boolean,
            default: false,
        },
        maskPattern: {
            type: String,
            required: false,
        },
    },
    emits: ["update:modelValue"],
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
