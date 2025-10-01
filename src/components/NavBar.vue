<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isHamburgerOpen = ref<boolean>(false);
const menuIcon = ref<string>();

const hamburgerClick = (): void => {
  isHamburgerOpen.value = !isHamburgerOpen.value;
};

watch(
  () => isHamburgerOpen.value,
  () => {
    if (isHamburgerOpen.value) {
      menuIcon.value =
        'https://img.icons8.com/?size=100&id=46&format=png&color=000000';
    } else {
      menuIcon.value =
        'https://img.icons8.com/?size=100&id=3096&format=png&color=000000';
    }
  },
  { immediate: true },
);

const menuClick = (menu: string) => {
  if (menu === 'home') {
    router.push('/');
  } else {
    router.push('/about');
  }
};
</script>
<template>
  <nav class="w-full fixed !z-[50] py-4 px-12">
    <div class="flex justify-between">
      <span class="text-2xl text-black">Yogprs</span>
      <div class="flex gap-4 text-black justify-center items-center">
        <span @click="menuClick('home')">Home</span>
        <span @click="menuClick('about')">About</span>
        <img :src="menuIcon" @click="hamburgerClick()" class="w-8" />
      </div>
    </div>
  </nav>
</template>
