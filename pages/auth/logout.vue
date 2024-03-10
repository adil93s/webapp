<template></template>

<script setup lang="ts">
const { $store } = useNuxtApp();

onMounted(async () => {
    try {
        if (process.server) {
            return await navigateTo({ path: "/", replace: true });
        }

        $store.dispatch('reset');
        localStorage.removeItem("vuex");
        await navigateTo({ path: "/", replace: true })
    } catch (e) {
        console.error(e);
    }
});
</script>
