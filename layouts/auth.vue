<template>
    <div class="flex min-h-screen bg-white justify-center font-inter">
        <div class="relative flex lg:basis-1/2 p-4 xs:p-6 sm:p-20 z-50">
            <router-view v-slot="{ Component }">
                <transition name="slide">
                    <component :is="Component" />
                </transition>
            </router-view>
            <div class="hidden lg:flex absolute w-full h-0.5 bg-tertiary bottom-14"></div>
        </div>
        <div class="relative hidden lg:flex basis-1/2 bg-secondary items-center">
            <div class="absolute top-0 left-0 w-full h-full bg-wave bg-no-repeat bg-right bg-contain bg-opacity-50"></div>
            <div class="flex flex-col px-20 gap-y-20 z-10">
                <div class="absolute top-40 bottom-0 left-20 flex flex-col gap-y-2">
                    <img src="~/assets/icons/quote.svg" class="w-14 -ml-[18px]" />
                    <div class="w-0.5 h-full bg-tertiary"></div>
                </div>
                <div class="flex flex-col gap-y-20">
                    <h1 class="pl-6 text-white text-4xl font-bold">La gestion d'annonces simple et efficace.</h1>
                    <div class="relative flex flex-col gap-y-20">
                        <div class="absolute w-14 h-0.5 bg-tertiary top-10"></div>
                        <div class="ml-16 flex flex-col bg-white shadow-card p-6 rounded-xl gap-y-6 animate-float">
                            <p>“J'ai utilisé MasterAnnonce pour gérer mes annonces, et je suis impressionné par sa facilité d'utilisation, son interface intuitive. En somme, MasterAnnonce est une solution complète pour la gestion d'annonce que je recommande vivement...”</p>
                            <div class="flex flex-col gap-y-2">
                                <p class="text-secondary font-semibold">Adil Chetouani</p>
                                <p>CEO de AdilCorp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
