<template>
    <div class="relative flex flex-col justify-between font-inter">
        <div class="flex items-center gap-x-3">
            <img src="../../assets/icons/logo.png" class="h-10" />
            <span class="text-secondary text-2xl font-semibold">MasterAnnonce.</span>
        </div>
        <div class="flex flex-col gap-y-10">
            <h1 class="text-primary text-3xl font-bold">
                <span class="text-secondary">Bienvenue</span> chez MasterAnnonce !<br />
                Connectez-vous à votre espace.
            </h1>
            <p class="text-grey">Dans cette démo, on peut se connecter avec n'importe quels identifiants, mais pour accéder aux annonces vous devez utiliser l'identifiant "adil" et le mdp "adil1234".</p>
            <div @keyup.enter="submit" class="flex flex-col gap-y-10">
                <div class="flex flex-col gap-y-5 max-w-sm">
                    <LabeledInput v-model="loginForm.username" label="Identifiant" placeholder="Entrez votre identifiant" type-input="text" :errors="validations.loginForm.username.$errors">
                        <template v-slot:icon>
                            <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.00059 8.99998C7.00529 8.99998 5.38349 7.38538 5.38349 5.39998C5.38349 3.41458 7.00529 1.79998 9.00059 1.79998C10.9959 1.79998 12.6177 3.41458 12.6177 5.39998C12.6177 7.38538 10.9959 8.99998 9.00059 8.99998ZM12.399 9.60565C13.1426 9.01353 13.7161 8.23495 14.061 7.34917C14.406 6.4634 14.5101 5.50202 14.3628 4.56293C14.0055 2.20224 12.0327 0.313179 9.65039 0.0377791C6.36359 -0.342921 3.57539 2.20408 3.57539 5.39998C3.57539 7.10098 4.36739 8.61655 5.60219 9.60565C2.56739 10.7406 0.351593 13.4055 0.00419362 17.0019C-0.00795281 17.128 0.00635723 17.2553 0.0462026 17.3756C0.0860479 17.4959 0.150555 17.6065 0.2356 17.7005C0.320644 17.7944 0.424354 17.8695 0.540099 17.9211C0.655845 17.9727 0.781082 17.9996 0.907798 18C1.12991 18.0018 1.34468 17.9206 1.51001 17.7722C1.67533 17.6239 1.77929 17.4191 1.80149 17.1981C2.16419 13.1814 5.25389 10.8 9.00059 10.8C12.7473 10.8 15.837 13.1814 16.1997 17.1981C16.2219 17.4191 16.3258 17.6239 16.4912 17.7722C16.6565 17.9206 16.8713 18.0018 17.0934 18C17.6298 18 18.0474 17.5338 17.9961 17.0019C17.6496 13.4055 15.4338 10.7406 12.3981 9.60565"
                                />
                            </svg>
                        </template>
                    </LabeledInput>
                    <LabeledInput v-model="loginForm.password" label="Mot de passe" :has-action="true" :type-input="isPasswordVisible ? 'text' : 'password'" placeholder="Entrez votre mot de passe" :errors="validations.loginForm.password.$errors">
                        <template v-slot:icon>
                            <svg class="fill-secondary" xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.5 0.5C9.98529 0.5 12 2.51471 12 5V7.25H13.5C14.3284 7.25 15 7.92163 15 8.75V17C15 17.8284 14.3284 18.5 13.5 18.5H1.5C0.671585 18.5 0 17.8284 0 17V8.75C0 7.92163 0.671585 7.25 1.5 7.25H3V5C3 2.51471 5.01471 0.5 7.5 0.5ZM10.5 5V7.25H4.5V5C4.5 3.34308 5.84312 2 7.5 2C9.15688 2 10.5 3.34308 10.5 5ZM1.5 8.75V17H13.5V8.75H1.5ZM8.93587 11.65C8.93587 12.1532 8.67027 12.5945 8.27165 12.8413L8.58687 14.2062C8.6954 14.6762 8.33844 15.125 7.85609 15.125H7.14391C6.66156 15.125 6.3046 14.6762 6.41313 14.2062L6.73782 12.8005C6.37399 12.5476 6.13586 12.1266 6.13586 11.65C6.13586 10.8768 6.76268 10.25 7.53584 10.25C8.30905 10.25 8.93587 10.8768 8.93587 11.65Z"
                                />
                            </svg>
                        </template>
                        <template v-slot:action>
                            <span class="absolute inset-y-0 right-2 flex items-center pl-2">
                                <button class="p-1 focus:outline-none focus:shadow-outline" @click="isPasswordVisible = !isPasswordVisible">
                                    <img v-if="isPasswordVisible" src="~/assets/icons/eye-close.svg" />
                                    <img v-else src="~/assets/icons/eye-open.svg" />
                                </button>
                            </span>
                        </template>
                    </LabeledInput>
                </div>
                <div class="flex flex-col gap-y-4">
                    <div class="flex">
                        <Button label="Me connecter" type="primary" :loading="isLoading" @click="submit" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="font-inter font-light text-medium">Développé par Adil</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as Sentry from "@sentry/vue";
import { useVuelidate } from "@vuelidate/core";
import { helpers, minLength, required } from "@vuelidate/validators";
import axios from "axios";
import { ref } from "vue";
import Button from "../../../components/ui/Button.vue";
import LabeledInput from "../../../components/ui/LabeledInput.vue";
import { AuthLoginForm } from "../../models/forms/AuthLoginForm";
import { User } from "~/models/entities/User";

const apiError = ref("");
const isLoading = ref(false);
const isPasswordVisible = ref(false);
const loginForm = ref(new AuthLoginForm());
const { $store } = useNuxtApp();
const localePath = useLocalePath();

definePageMeta({
    layout: "auth",
    middleware: ["is-logged-in"],
});

const validations = useVuelidate(
    {
        loginForm: {
            username: {
                username: helpers.withMessage("Veuillez saisir un mail valide", required),
            },
            password: {
                required: helpers.withMessage("Le mot de passe est requis", required),
                minLengthValue: helpers.withMessage("Veuillez saisir au moins 6 caractères", minLength(6)),
            },
        },
    },
    { loginForm }
);

async function submit() {
    isLoading.value = true;
    apiError.value = "";

    const isFormCorrect = await validations.value.loginForm.$validate();

    if (!isFormCorrect) {
        isLoading.value = false;
        return;
    }

    try {
        const response = await axios.post("/api/login", loginForm.value);

        console.log(response.data);
        $store.commit("user/setUser", {
            user: new User({ username: loginForm.value?.username }),
            token: response.data,
        });

        await navigateTo({ path: localePath({ name: "index" }) });
    } catch (error) {
        console.log(error);
    } finally {
        isLoading.value = false;
    }
}
</script>
