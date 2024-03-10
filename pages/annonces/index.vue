<template>
    <section class="py-12 md:py-32">
        <div class="container flex flex-col gap-y-8 md:gap-y-16">
            <div v-if="annonces && annonces.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <template v-for="a in annonces" :key="a?.id">
                    <div class="bg-light-2 rounded-xl overflow-hidden shadow-card duration-300">
                        <div class="flex flex-col p-6 justify-between gap-y-4">
                            <div>
                                <h2 class="text-xl font-semibold">{{ a?.title || "" }}</h2>
                                <p class="text-md font-normal mt-2 line-clamp-2">{{ a?.description }}</p>
                            </div>
                        </div>
                        <div class="flex justify-end space-x-2 p-4">
                            <Button label="Voir plus" type="primary" @click="navigateTo({ path: localePath({ name: 'annonces-slug', params: { slug: a?.id } }) })" />
                            <Button label="Supprimer" type="danger" @click="remove(a)" />
                        </div>
                    </div>
                </template>
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="j in 9" :key="j" class="bg-light-2 rounded-xl overflow-hidden shadow-card duration-300">
                    <div class="flex flex-col p-6 justify-between gap-y-4">
                        <div v-for="j in 3" :key="j" class="py-5">
                            <ParagraphShimmer :is-loading="true" :lines="1" :random-size="true"></ParagraphShimmer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// @ts-ignore
import { ParagraphShimmer } from "vue3-shimmer";
import { Annonce } from "~/models/entities";
import axios from "axios";
import Button from "../../../components/ui/Button.vue";

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

const apiError = ref("");
const localePath = useLocalePath();
const { $store } = useNuxtApp();
const annonces = ref<Array<Annonce>>([]);
const config = useRuntimeConfig();

const loadAnnonces = async () => {
    const token = $store.state.user?.token;
    if (token) {
        apiError.value = "";
        try {
            const response = await $fetch<Array<Annonce>>(`/api/annonces`, { headers: { Authorization: `Bearer ${token}` } });
            annonces.value = response.map((p: any) => Annonce.fromJSON(p));
        } catch (error) {
            console.error(error);
            apiError.value = "Erreur lors du chargement des annonces.";
        }
    } else {
        console.log("Token non disponible ou utilisateur non authentifié.");
    }
};

onMounted(loadAnnonces);

async function remove(annonce: Annonce) {
    const token = $store.state.user?.token;
    if (token) {
        apiError.value = "";
        try {
            await axios.delete(`${config.public.apiDomainUrl}/annonces/${annonce?.id}`, {
                headers: {
                    Authorization: `Basic ${token}`,
                },
            });
            loadAnnonces();
        } catch (error) {
            console.log(error);
        }
    }
}
</script>
