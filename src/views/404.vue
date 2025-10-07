<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const buttonRoute = (): void => {
  router.back();
};
</script>
<template>
  <div class="w-full h-screen bg-primary">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold">404</h1>
      <h1 class="text-3xl font-semibold">Not Found</h1>
      <div class="py-4">
        <button
          @click="buttonRoute()"
          class="rounded-2xl px-3 md:px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
        >
          <a>Back</a>
        </button>
      </div>
    </div>
  </div>
</template>
