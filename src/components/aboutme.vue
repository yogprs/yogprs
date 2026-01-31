<script setup lang="ts">
import EduCertification from './eduCertification.vue';
import Experience from './experience.vue';
import yp from '@/assets/img/yp.png';
</script>

<template>
  <section
    id="about"
    class="animate-in fade-in slide-in-from-bottom-4 duration-700 py-14 md:py-30 border-t border-slate-200 dark:border-[#232f48]"
  >
    <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
      <div class="relative shrink-0">
        <div
          class="absolute -inset-1 bg-primary rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
        ></div>
        <div
          class="relative bg-center bg-no-repeat aspect-square bg-cover rounded-xl w-48 h-48 md:w-56 md:h-56 border-2 border-white/10"
          data-alt="Professional headshot of a friendly smiling web developer"
          :style="{ backgroundImage: `url(${yp})` }"
        ></div>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <h1
            class="text-white text-4xl md:text-5xl font-bold leading-tight tracking-[-0.025em]"
          >
            Yoga Prasetya
          </h1>
          <p class="text-primary text-lg font-semibold mt-1">
            Junior Full Stack Developer
          </p>
          <p class="text-[#92a4c9] text-base mt-1">
            Based in West Jakarta, Indonesia
          </p>
        </div>
        <div class="space-y-4">
          <p class="text-[#cbd5e1] text-lg leading-relaxed">
            I am a passionate web developer with continuously evolving expertise
            in several technologies. I am from West Jakarta, Indonesia. I
            graduated with a bachelor's degree in information technology from
            Bina Sarana Informatika University. My job is to build responsive
            websites using several technologies. In addition, I am also very
            interested in learning about new and emerging technologies.
          </p>
          <p class="text-[#cbd5e1] text-lg leading-relaxed">
            I believe in the power of continuous learning and pushing the
            boundaries of what's possible on the web. Whether it's architecting
            a robust backend or crafting a pixel-perfect interface, my goal is
            always to deliver value that delights users and drives business
            growth.
          </p>
        </div>
      </div>
    </div>
  </section>
  <Experience />
  <EduCertification />
</template>
