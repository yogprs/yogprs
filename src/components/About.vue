<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

import { Icon } from "@iconify/vue";
import { getImage } from "@/utils/image";

const showQuote = ref<boolean>(false);

onMounted(() => {
  gsap.utils.toArray(".reveal").forEach((el: any) => {
    gsap.from(el, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });
});
</script>

<template>
  <section id="about" class="reveal">
    <div
      class="flex flex-col lg:flex-row gap-12 mx-auto max-w-6xl px-6 lg:py-32"
    >
      <div>
        <h2 class="mb-8 text-5xl font-bold text-on-surface">About Me</h2>
        <div class="flex flex-col gap-2 lg:gap-1">
          <p class="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            I'm <span class="text-primary">Yoga Prasetya</span>, a Passionate
            <span class="text-primary"> Fullstack Developer </span> focused on
            performance, accessibility and beautiful user experiences. Graduated
            from Bina Sarana Informatika University with a degree in Information
            Technology.
          </p>
          <p class="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            I have experience in developing web applications on both the
            frontend and backend using technologies such as Vue.js, React,
            Next.js, Node.js, Nuxt.js, MySQL, PostgreSQL, and MongoDB.
          </p>
          <p class="max-w-3xl text-lg leading-relaxed text-on-surface-variant">
            I enjoy building modern, efficient, and user-friendly digital
            solutions while continuously improving my skills to keep up with the
            ever-evolving technology landscape.
          </p>
        </div>
      </div>
      <div
        @mouseenter="showQuote = true"
        @mouseleave="showQuote = false"
        class="lg:py-12 lg:pl-12 relative group"
      >
        <div
          class="relative max-w-92 rounded-2xl overflow-hidden border border-[#324467] neon-glow aspect-square bg-[#192233]"
        >
          <img
            alt="Yoga Prasetya, Fullstack Developer, Graduated from Bina Sarana Informatika University"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            :src="getImage('profile', 'yogprs.png') || ''"
          />
        </div>
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
            class="absolute w-fit bottom-6 left-0 right-6 p-4 rounded-xl bg-surface-container backdrop-blur-lg border border-outline-variant"
          >
            <div class="flex flex-row items-center gap-2">
              <Icon
                icon="material-symbols:code-xml"
                class="w-[1.25em] h-[1.25em] text-primary"
              />

              <p class="text-sm font-bold text-white/80 line-clamp-2">
                Fullstack Developer
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>
