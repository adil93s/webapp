<template>
    <section class="py-12 md:py-32">
        <div v-if="annonce" class="container flex flex-col gap-y-5">
            <h1>{{ annonce.title }}</h1>
            <p>{{ annonce.description }}</p>
            <address>{{ annonce.address }}</address>
            <p>{{ annonce.mail }}</p>
            <time>{{ annonce.date }}</time>
        </div>
        <div v-else class="container flex flex-col gap-y-5">
            <div v-for="j in 5" :key="j" class="py-5">
                <ParagraphShimmer :is-loading="true" :lines="1" :random-size="true"></ParagraphShimmer>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// @ts-ignore
import { ParagraphShimmer } from "vue3-shimmer";
import { onMounted, ref } from "vue";
import { Annonce } from "~/models/entities";

useHead({
    title: "MasterAnnonce - Votre application de gestion d'annonces",
    meta: [
        {
            name: "description",
            content: "MasterAnnonce, la plateforme de gestion d'annonces.",
        },
    ],
});

definePageMeta({
    layout: "default",
    middleware: ["auth"],
});

const route = useRoute();
const annonce = ref<Annonce | null>(null);
const { $store } = useNuxtApp();

const id = route.params.slug;

const loadAnnonce = async () => {
    const token = $store.state.user?.token;
    console.log("test");
    if (token && id) {
        try {
            const data = await $fetch<Annonce>(`/api/annonce/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            annonce.value = data;
        } catch (error) {
            console.error("Erreur lors du chargement de l'annonce:", error);
        }
    }
};

onMounted(loadAnnonce);
</script>
