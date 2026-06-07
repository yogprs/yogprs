<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import gsap from "gsap";
import { techStacks } from "@/utils/information";
import { Icon } from "@iconify/vue";

let techSliderTween: gsap.core.Tween | null = null;

const techView = ref<"grid" | "slider">("slider");

const techStacksLoop = [...techStacks, ...techStacks, ...techStacks];

onMounted(() => {
  gsap.fromTo(
    ".tech-card",
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".tech-section",
        start: "top 80%",
      },
    },
  );

  gsap.to(".tech-track", {
    xPercent: -50,
    duration: 80,
    ease: "none",
    repeat: -1,
  });

  techSliderTween = gsap.to(".tech-track", {
    xPercent: -50,
    duration: 60,
    ease: "none",
    repeat: -1,
    paused: techView.value !== "slider",
  });
});

watch(techView, (value) => {
  if (!techSliderTween) return;

  if (value === "slider") {
    techSliderTween.resume();
  } else {
    techSliderTween.pause();
  }
});

onUnmounted(() => {
  techSliderTween?.kill();
});
</script>

<template>
  <section class="tech-section relative overflow-hidden py-40">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,55,138,0.2),transparent_60%)]"
    />

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="mb-20 text-center">
        <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
          Technologies
        </p>

        <h2 class="text-5xl font-black text-on-surface">Tech Stack</h2>

        <p class="mx-auto mt-6 max-w-2xl text-on-surface-variant">
          Technologies and tools I use to build modern, scalable, and
          high-performance applications.
        </p>
      </div>

      <div class="mt-8 flex justify-center">
        <div
          class="relative flex rounded-2xl border border-outline-variant bg-surface-container p-1"
        >
          <div
            class="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-primary transition-all duration-300"
            :class="[techView === 'grid' ? 'right-1' : 'right-[calc(50%+2px)]']"
          />

          <button
            @click="techView = 'slider'"
            :class="`relative z-10 px-5 py-2 text-sm font-medium cursor-pointer ${techView === 'slider' ? 'text-on-primary-fixed' : ''}`"
          >
            Slider
          </button>

          <button
            @click="techView = 'grid'"
            :class="`relative z-10 px-5 py-2 text-sm font-medium cursor-pointer ${techView === 'grid' ? 'text-on-primary-fixed' : ''}`"
          >
            Grid
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-show="techView === 'grid'"
          class="mt-12 grid grid-cols-2 gap-6 lg:gap-12 md:grid-cols-4"
        >
          <div
            v-for="(tech, index) in techStacks"
            :key="index"
            class="tech-card group relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container/50 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-primary"
          >
            <div
              class="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary),transparent_70%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
            />

            <div class="relative flex flex-col items-center gap-4">
              <Icon
                :icon="tech.icon"
                class="text-5xl transition-transform duration-500 group-hover:scale-125"
              />

              <span class="font-semibold text-on-surface">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </Transition>

      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="techView === 'slider'" class="mt-12 overflow-hidden">
          <div class="tech-track flex w-max gap-6">
            <div
              v-for="(tech, index) in techStacksLoop"
              :key="`${tech.name}-${index}`"
              class="group flex items-center gap-4 rounded-2xl border border-outline-variant bg-surface-container/40 px-6 py-4 backdrop-blur-md hover:border-primary"
            >
              <Icon
                :icon="tech.icon"
                class="text-4xl transition-transform duration-300 group-hover:scale-110"
              />

              <span class="font-medium text-on-surface">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
