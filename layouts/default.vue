<template>
    <header>
        <Navbar />
    </header>
    <div class="flex flex-col min-h-screen">
        <slot />
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Footer from "~/components/ui/Footer.vue";
import Navbar from "~/components/ui/Navbar.vue";
</script>
