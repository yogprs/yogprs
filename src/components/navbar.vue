<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const activeSection = ref('home');

const sections = ref(['home', 'about', 'projects', 'contact']);

const observer = ref<IntersectionObserver | null>(null);

const navigateToCV = () => {
  window.open(
    'https://drive.google.com/file/d/1LzsXoksnnlB5mvoXHi7iQgbPgRnuteJb/view?usp=sharing',
    '_blank',
  );
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  if (id === 'home') {
    history.replaceState(null, '', '/');
  } else {
    history.replaceState(null, '', `#${id}`);
  }
};

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;

          if (entry.target.id === 'home') {
            history.replaceState(null, '', '/');
          } else {
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        }
      });
    },
    {
      rootMargin: '-40% 0px -55% 0px', // deteksi saat section berada di tengah layar
      threshold: 0,
    },
  );

  sections.value?.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.value?.observe(el);
  });
});

onUnmounted(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-solid border-[#232f48] bg-background-dark/80 backdrop-blur-md"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <div class="bg-primary p-1.5 rounded-lg text-white">
          <img class="size-7.5" src="/logo-yp.png" />
        </div>
        <h2 class="text-xl font-black tracking-tight">YOGPRS</h2>
      </div>

      <nav class="hidden md:flex items-center gap-10">
        <button
          :key="id"
          v-for="id in sections"
          @click="scrollTo(id)"
          :class="[
            'capitalize transition-all duration-300 ease-out font-medium cursor-pointer',
            activeSection === id
              ? 'text-primary border-b-2 border-primary'
              : 'hover:text-primary/80',
          ]"
        >
          {{ id }}
        </button>
      </nav>
      <div class="flex items-center gap-4">
        <button
          @click="navigateToCV"
          class="flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all active:scale-95 cursor-pointer"
        >
          <span>Download CV</span>
        </button>
      </div>
    </div>
  </header>
</template>
