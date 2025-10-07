<script setup lang="ts">
import { computed, ref } from 'vue';
import NavBar from './components/NavBar.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isHamburgerOpen = ref<boolean>(false);

const currentRoute = computed((): string => {
  return route?.path;
});

const setMenu = (con: boolean): void => {
  isHamburgerOpen.value = con;
};

const buttonRoute = (path: string): void => {
  router.push(`/${path}`);
};
</script>

<template>
  <NavBar
    v-if="currentRoute !== '/404'"
    :is-hamburger-open="isHamburgerOpen"
    @open="setMenu($event)"
  />
  <div
    :class="`${isHamburgerOpen ? 'block' : 'hidden'} fixed w-full h-screen z-[45] backdrop-blur-sm transition-all ease duration-700 overflow-hidden`"
  >
    <div
      class="relative backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 min-h-[100vh] bg-secondary min-w[100vw]"
    >
      <div
        v-if="currentRoute?.length <= 1"
        class="flex flex-col items-center space-y-8 my-auto mx-0 z-50 text-white"
      >
        <h1 class="text-4xl font-bold">Menu</h1>
        <a class="hover:cursor-pointer" href="/#home">Home</a>
        <a class="hover:cursor-pointer" href="/#about">About</a>
        <a class="hover:cursor-pointer" href="/#projects">Projects</a>
        <a class="hover:cursor-pointer" href="/#contact">Contact</a>
      </div>
      <div
        v-else
        class="flex flex-col items-center space-y-8 my-auto mx-0 z-50 text-white"
      >
        <h1 class="text-4xl font-bold">Menu</h1>
        <a class="hover:cursor-pointer" @click="buttonRoute('')">Home</a>
        <a class="hover:cursor-pointer" @click="buttonRoute('about')">About</a>
        <a class="hover:cursor-pointer" @click="buttonRoute('projects')"
          >Projects</a
        >
        <a class="hover:cursor-pointer" @click="buttonRoute('#contact')"
          >Contact</a
        >
      </div>
    </div>
  </div>
  <div class="relative text-black">
    <router-view />
  </div>
</template>
