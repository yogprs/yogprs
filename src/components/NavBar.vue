<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const activeSection = ref('home');

const sections = ref(['home', 'about', 'projects', 'contact']);

const lastId = ref<string>();

const handleScroll = () => {
  const scrollPos = window.scrollY + 120;

  for (const id of sections.value) {
    const el = document.getElementById(id);
    if (!el) continue;

    const top = el.offsetTop;
    const height = el.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      if (lastId.value !== id) {
        lastId.value = id;
        activeSection.value = id;

        if (id === 'home') {
          history.replaceState(null, '', '/');
        } else {
          history.replaceState(null, '', `#${id}`);
        }
      }
      break;
    }
  }
};

const navigateToCV = () => {
  window.open(
    'https://drive.google.com/file/d/1LzsXoksnnlB5mvoXHi7iQgbPgRnuteJb/view?usp=sharing',
    '_blank',
  );
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  activeSection.value = id;

  if (id === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  setTimeout(() => {
    if (id === 'home') {
      history.replaceState(null, '', '/');
    } else {
      history.replaceState(null, '', `#${id}`);
    }
  }, 400);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-[#232f48] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
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
            'capitalize transition-all font-medium cursor-pointer',
            activeSection === id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'hover:text-blue-500',
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
