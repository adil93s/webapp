<template>
    <nav class="py-6 font-inter">
        <div class="container mx-auto">
            <div class="flex flex-row justify-between items-center">
                <div class="flex gap-x-2 items-center select-none">
                    <img class="w-8 h-8" src="~/assets/icons/logo.png" alt="Logo" />
                    <NuxtLink :to="localePath({ name: 'index' })" class="text-xl text-primary font-semibold">Master <span class="text-secondary">Annonce.</span></NuxtLink>
                </div>
                <button class="lg:hidden flex items-center justify-center">
                    <svg id="nav-open" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 17H20M4 12H20M4 7H20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="hidden lg:flex items-center">
                    <ul class="flex list-none gap-x-4 lg:gap-x-8 text-base transition-all ease-in duration-300">
                        <li class="flex text-base font-normal">
                            <NuxtLink :to="localePath({ name: 'index' })" class="w-full px-5 py-2 text-primary hover:text-secondary transition duration-300">Home </NuxtLink>
                        </li>
                        <li class="flex text-base font-normal">
                            <NuxtLink :to="localePath({ name: 'annonces' })" class="w-full px-5 py-2 text-primary hover:text-secondary transition duration-300">Annonces </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-full inset-0 bg-white transition-all duration-300 opacity-0 -z-10 absolute" id="nav">
                    <div class="hidden container mx-auto py-6" id="nav-content">
                        <div class="flex flex-col items-end gap-y-12">
                            <button class="lg:hidden nav-close flex items-center justify-center pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul class="flex flex-col p-4 text-end text-xl gap-y-4">
                                <li><NuxtLink :to="localePath({ name: 'index' })" class="nav-close py-2 text-primary hover:text-secondary">Home</NuxtLink></li>
                                <li><NuxtLink :to="localePath({ name: 'annonces' })" class="nav-close py-2 text-primary hover:text-secondary">Annonces</NuxtLink></li>
                                <li><NuxtLink :to="localePath({ name: 'auth-logout' })" class="nav-close py-2 text-primary hover:text-secondary">Se déconnecter</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex text-base font-normal">
                    <NuxtLink :to="localePath({ name: 'auth-logout' })" class="w-full px-5 py-2 text-primary hover:text-secondary transition duration-300">Se déconnecter </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Navbar",
    components: {},
    data() {
        return {
            localePath: useLocalePath(),
        };
    },
});
</script>
