<script setup lang="ts">
import yogpras from '@/assets/img/yopras.jpg';
import { ref } from 'vue';

const showQuote = ref<boolean>(false);

const scrollTo = (id: string) => {
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
</script>

<template>
  <section id="home">
    <div class="py-10 md:py-12 @container">
      <div
        class="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20"
      >
        <!-- Text Content -->
        <div class="flex flex-col gap-8 flex-1">
          <div class="flex flex-col gap-4">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-primary"
                ></span>
              </span>
              Available for new projects
            </div>
            <h1
              class="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >
              Building Web <br />
              <span
                class="text-primary bg-clip-text bg-linear-to-r from-primary to-blue-400"
                >Applications</span
              >
              with Precision
            </h1>
            <p
              class="text-lg text-slate-600 dark:text-slate-400 max-w-135 leading-relaxed"
            >
              Full-stack developer specializing in building scalable,
              high-performance web applications using modern technologies and
              clean architecture.
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <a
              @click="scrollTo('projects')"
              class="flex min-w-40 items-center justify-center rounded-xl h-14 px-8 bg-primary hover:shadow-lg hover:shadow-primary/30 text-white text-base font-bold transition-all cursor-pointer"
            >
              View My Projects
            </a>
            <a
              @click="scrollTo('contact')"
              class="flex min-w-40 items-center justify-center rounded-xl h-14 px-8 border-2 border-slate-200 dark:border-[#232f48] hover:bg-slate-100 dark:hover:bg-[#192233] text-slate-900 dark:text-white text-base font-bold transition-all cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <!-- Image/Visual Content -->
        <div class="flex-1 w-full max-w-125 relative">
          <div
            class="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-10 right-15 sm:w-20 sm:-20 xl:w-40 xl:h-40 bg-blue-400/20 rounded-full blur-3xl"
          ></div>
          <div
            @mouseenter="showQuote = true"
            @mouseleave="showQuote = false"
            class="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-[#324467] neon-glow aspect-square bg-slate-100 dark:bg-[#192233]"
          >
            <img
              class="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              data-alt="developer working on code in a dark environment"
              :src="yogpras"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent"
            ></div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="showQuote"
                class="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background-dark/40 backdrop-blur-md border border-white/10"
              >
                <p class="text-sm font-bold italic text-white/80 line-clamp-2">
                  "The best way to get better at coding is to keep coding."
                </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
