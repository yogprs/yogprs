<script setup lang="ts">
import { computed, ref } from "vue";

const isHamburgerOpen = ref<boolean>(false);

const hamburgerOpen = computed((): string => {
  if (isHamburgerOpen)
    return "https://img.icons8.com/?size=100&id=46&format=png&color=ffffff";
  return "https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff";
});

const hamburgerClick = (): void => {
  isHamburgerOpen.value = !isHamburgerOpen.value;
};
</script>
<template>
  <div class="w-full py-4 px-12">
    <div class="flex justify-between">
      <span class="text-2xl text-white">Yogprs</span>
      <img :src="hamburgerOpen" @click="hamburgerClick" class="w-8" />
    </div>
  </div>
</template>
