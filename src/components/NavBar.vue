<script setup lang="ts">
import { ref, watch } from 'vue';

type NavBar = {
  isHamburgerOpen: boolean;
};

const props = defineProps<NavBar>();
const emit = defineEmits<{
  open: [open: boolean];
}>();

// const isHamburgerOpen = ref<boolean>(false);
const menuIcon = ref<string>();

const hamburgerClick = (): void => {
  // isHamburgerOpen.value = !isHamburgerOpen.value;
  emit('open', !props?.isHamburgerOpen);
};

watch(
  () => props?.isHamburgerOpen,
  () => {
    if (props?.isHamburgerOpen) {
      menuIcon.value = `https://img.icons8.com/?size=100&id=46&format=png&color=ffffff`;
    } else {
      menuIcon.value =
        'https://img.icons8.com/?size=100&id=3096&format=png&color=000000';
    }
  },
  { immediate: true },
);
</script>
<template>
  <nav
    class="w-full fixed !z-[50] py-5 px-12 transition-colors backdrop-blur-md bg-opacity-50"
  >
    <div class="flex justify-between">
      <a
        :class="`text-2xl ${isHamburgerOpen ? 'text-white' : 'text-black'} font-bold tracking-[.1rem]`"
        href="/"
      >
        Yogprs
      </a>
      <div
        :class="`hidden md:flex ${props?.isHamburgerOpen ? 'text-white' : 'text-black'} justify-center items-center`"
      >
        <a
          class="text-lg font-medium hover:bg-secondary hover:text-white px-4 py-1 hover:rounded-sm"
          href="/#home"
        >
          Home
        </a>
        <a
          class="text-lg font-medium hover:bg-secondary hover:text-white px-4 py-1 hover:rounded-sm"
          href="/#about"
          >About</a
        >
        <a
          class="text-lg font-medium hover:bg-secondary hover:text-white px-4 py-1 hover:rounded-sm"
          href="/#projects"
          >Projects</a
        >
        <a
          class="text-lg font-medium hover:bg-secondary hover:text-white px-4 py-1 hover:rounded-sm"
          href="/#contact"
          >Contact</a
        >
      </div>
      <img
        :src="menuIcon"
        @click="hamburgerClick()"
        class="w-8 block md:hidden"
      />
    </div>
  </nav>
</template>
