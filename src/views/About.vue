<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const aboutClick = () => {
  router.push('/');
};
</script>
<template>
  <div
    class="fixed w-full h-screen flex flex-col z-[45] overflow-hidden py-4 px-12 justify-center text-black"
  >
    <span>About</span>
    <span @click="aboutClick()">Home</span>
  </div>
</template>
