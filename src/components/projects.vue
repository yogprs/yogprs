<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import projects from '@/assets/json/projects.json';
import Card from './card.vue';
import Icons from './icons.vue';

const isExpand = ref<boolean>(false);
const show = ref(false);

const filteredData = computed(() => {
  const limit = 3;

  // if data is not ready or still loading, and get empty array for security
  if (!projects.data) return [];

  // if isExpand true, show all
  // and if false, get from first index until limit index;
  return isExpand.value ? projects.data : projects.data.slice(0, limit);
});

const setExpand = (): void => {
  isExpand.value = !isExpand.value;
  if (isExpand.value === false) {
    const el = document.getElementById('projects');
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

onMounted(() => {
  const el = document.getElementById('projects');
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        show.value = true;
      }
    },
    { threshold: 0.2 },
  );

  observer.observe(el);
});
</script>

<template>
  <section id="projects" class="pt-26">
    <div class="mb-12">
      <div class="flex flex-col items-center justify-center gap-4 mb-10">
        <h2 class="text-3xl font-bold leading-tight tracking-tight">
          Some Projects I've built
        </h2>
        <div
          class="hidden md:flex bg-primary/20 backdrop-blur-[10px] border border-primary/8 h-1 w-[30%] rounded-xl transition-all duration-300"
        ></div>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(data, i) in filteredData"
        :key="data.name ?? i"
        :class="[
          show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          `delay-[${i * 100}ms]`,
          'transition-all duration-700 ease-out',
        ]"
      >
        <Card :data="data" />
      </div>
    </div>
    <!-- Load More -->
    <div class="mt-16 flex justify-center">
      <button
        @click="setExpand"
        class="group flex items-center gap-3 bg-white dark:bg-[#1a2233] border border-slate-200 dark:border-white/5 rounded-full px-8 py-4 font-bold text-sm transition-all hover:border-primary/50 hover:bg-primary/5 hover:cursor-pointer"
      >
        <span>{{ `View ${isExpand ? 'Less' : 'More'} Projects` }}</span>
        <Icons
          :class="`text-lg transition-transform ${isExpand ? 'group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`"
          :icon="
            isExpand
              ? 'material-symbols:keyboard-arrow-up'
              : 'material-symbols:keyboard-arrow-down'
          "
        />
      </button>
    </div>
  </section>
</template>
