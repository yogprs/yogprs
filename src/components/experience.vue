<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { experiences } from "@/utils/information";

onMounted(() => {
  gsap.from(".experience-item", {
    opacity: 0,
    x: -100,
    stagger: 0.25,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 70%",
    },
  });

  gsap.fromTo(
    ".timeline-progress",
    {
      height: 0,
    },
    {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    },
  );
});
</script>

<template>
  <section
    class="experience-section relative mx-auto max-w-6xl px-6 pt-24 pb-40"
  >
    <div class="mb-20 text-center">
      <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
        Career Journey
      </p>

      <h2 class="text-5xl font-black text-on-surface">Experience</h2>
    </div>

    <div class="relative">
      <!-- Timeline Background -->
      <div class="absolute left-4 top-0 h-full w-px bg-outline-variant" />

      <!-- Timeline Progress -->
      <div class="timeline-progress absolute left-4 top-0 w-px bg-primary" />

      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="experience-item relative mb-20 pl-16"
      >
        <!-- Dot -->
        <div
          class="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)]"
        />

        <div
          class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(79,55,138,0.15),transparent_60%)]"
        />

        <div
          class="rounded-3xl border border-outline-variant bg-surface-container/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary"
        >
          <p class="mb-2 text-sm font-semibold text-primary">
            {{ experience.period }}
          </p>

          <h3 class="text-2xl font-bold text-on-surface">
            {{ experience.role }}
          </h3>

          <div class="mt-1 text-on-surface-variant flex gap-2">
            <span>
              {{ experience.company.name }}
            </span>
            <div
              v-if="experience.company?.location"
              class="border border-outline-variant"
            />
            <span v-if="experience.company?.location">
              {{ experience.company?.location }}
            </span>
          </div>

          <p
            class="mt-4 leading-relaxed text-on-surface-variant lg:text-justify"
          >
            {{ experience.description }}
          </p>

          <div
            v-if="experience.tasks?.length"
            class="mt-6 flex flex-wrap gap-2"
          >
            <span
              v-for="task in experience.tasks"
              :key="task"
              class="group rounded-full border border-outline-variant bg-surface-container-high/50 px-3 py-1.5 text-xs font-medium text-on-surface-variant transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary cursor-default"
            >
              {{ task }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
