<script setup lang="ts">
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';

const isHamburgerOpen = ref<boolean>(false);

const setMenu = (con: boolean): void => {
  isHamburgerOpen.value = con;
};
</script>

<template>
  <NavBar :is-hamburger-open="isHamburgerOpen" @open="setMenu($event)" />
  <div
    :class="`${isHamburgerOpen ? 'block' : 'hidden'} fixed w-full h-screen z-[45] backdrop-blur-sm transition-all ease duration-700 overflow-hidden`"
  >
    <div
      class="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-secondary min-w[100vw]"
    >
      <div
        class="flex flex-col items-center space-y-8 my-auto mx-0 z-50 text-white"
      >
        <h1 class="text-4xl font-bold">Menu</h1>
        <a class="hover:cursor-pointer">Home</a>
        <a class="hover:cursor-pointer">About</a>
        <a class="hover:cursor-pointer">Projects</a>
        <a class="hover:cursor-pointer">Contact</a>
      </div>
    </div>
  </div>
  <div class="relative text-black">
    <router-view />
  </div>
</template>
