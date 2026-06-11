<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getImage } from '@/utils/image';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import { projects } from '@/utils/information';

gsap.registerPlugin(ScrollTrigger);

const projectFilter = ref('All');

const projectCategories = [
  'All',
  'Web Development',
  'Mobile Development',
  'AI & Machine Learning',
  'Others',
];

onMounted(() => {
  scrollToTop();
  gsap.from('.project-card', {
    opacity: 0,
    y: 100,
    stagger: 0.12,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-section',
      start: 'top 75%',
    },
  });

  gsap.utils.toArray('.project-image').forEach((img: any) => {
    gsap.from(img, {
      scale: 1.3,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
      },
    });
  });

  gsap.utils.toArray('.reveal').forEach((el: any) => {
    gsap.from(el, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    });
  });

  gsap.from('.filter-item', {
    opacity: 0,
    x: -100,
    stagger: 0.25,
    duration: 1,
    ease: 'power3.out',
  });
});

const filteredProjects = computed(() => {
  if (projectFilter.value === 'All') {
    return projects;
  }

  return projects.filter((project) =>
    project.category.includes(projectFilter.value),
  );
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

setTimeout(() => {
  ScrollTrigger.refresh();
}, 100);
</script>

<template>
  <main
    class="relative bg-background text-on-surface overflow-hidden font-inter"
  >
    <section
      class="projects-section relative mx-auto max-w-7xl px-6 pt-20 pb-40"
    >
      <RouterLink
        to="/"
        class="flex items-center cursor-pointer hover:text-primary transition-all hover:font-semibold"
      >
        <Icon
          icon="material-symbols:keyboard-arrow-left"
          class="w-[1.25em] h-[1.25em]"
        />
        <span>Back</span>
      </RouterLink>
      <div class="reveal mb-20 text-center">
        <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
          Portfolio
        </p>

        <h2 class="text-5xl font-black text-on-surface">Featured Projects</h2>

        <p class="mx-auto mt-6 max-w-2xl text-on-surface-variant">
          Selected projects showcasing modern web, mobile, AI, and real-time
          application development.
        </p>
      </div>

      <!-- FILTER -->
      <div class="filter-item mb-16 flex flex-wrap justify-center gap-3">
        <button
          v-for="category in projectCategories"
          :key="category"
          @click="projectFilter = category"
          class="rounded-full border px-5 py-2 text-sm transition-all duration-300"
          :class="
            projectFilter === category
              ? 'border-primary bg-primary text-on-primary-fixed'
              : 'border-outline-variant hover:border-primary'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- PROJECT GRID -->
      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="project in filteredProjects"
          :key="project.name"
          class="project-card group overflow-hidden rounded-4xl border border-outline-variant bg-surface-container/50 backdrop-blur-md hover:border-primary-fixed hover:shadow-md hover:shadow-primary-fixed-dim"
        >
          <!-- IMAGE -->
          <div class="relative aspect-video overflow-hidden">
            <img
              v-if="project.image"
              :src="getImage('projects', `${project.image}.png`) || ''"
              :alt="project.name"
              class="project-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div v-else class="w-full h-full flex items-center justify-center">
              <span
                class="font-bold text-xl text-on-surface group-hover:text-primary"
                >No Image</span
              >
            </div>

            <div
              class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
            />

            <div
              class="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur-md"
            >
              {{ project.year }}
            </div>
          </div>

          <!-- CONTENT -->
          <div class="p-8">
            <div class="mb-4 flex items-center justify-between">
              <h3
                class="text-2xl font-bold text-on-surface group-hover:text-primary"
              >
                {{ project.name }}
              </h3>
            </div>

            <p class="leading-relaxed text-on-surface-variant">
              {{ project.description }}
            </p>

            <!-- STACK -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="stack in project.stack"
                :key="stack"
                class="rounded-full border border-on-tertiary px-3 py-1 text-xs text-tertiary"
              >
                {{ stack }}
              </span>
            </div>

            <!-- LINKS -->
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-for="repo in project.link.github"
                :key="repo.url"
                :href="repo.url"
                target="_blank"
                class="rounded-xl border flex items-center gap-2 border-outline-variant px-4 py-2 text-sm transition-all hover:border-primary hover:text-primary"
              >
                <Icon
                  icon="devicon:github"
                  class="w-4 h-4 bg-white rounded-full"
                />
                <span>
                  {{ repo.text }}
                </span>
              </a>

              <a
                v-if="project.link.preview"
                :href="project.link.preview"
                target="_blank"
                class="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm text-on-primary-fixed transition-transform hover:scale-105"
              >
                <Icon icon="material-symbols:rocket-launch" class="w-4 h-4" />
                <span> Live Preview </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>
