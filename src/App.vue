<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="relative text-white">
    <router-view />
  </div>
</template>
