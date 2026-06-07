<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Home from "@/components/Home.vue";
import Navbar from "@/components/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const path = computed(() => route.path);
</script>

<template>
  <Navbar />
  <Home v-if="path === '/'" />
  <router-view v-else />
  <Footer />
</template>
