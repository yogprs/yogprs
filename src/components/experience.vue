<script setup lang="ts">
import type { Experience } from '@/types/experience';
import { onMounted, ref } from 'vue';
import experienceJson from '@/assets/json/experience.json';
import Icons from './icons.vue';

onMounted(() => setExperience());

const experience = ref<Experience[]>([]);

const setExperience = () => {
  experience.value = experienceJson?.data;
};
</script>

<template>
  <section class="py-12">
    <div class="flex items-center gap-4 mb-10">
      <h2 class="text-white text-3xl font-bold tracking-[-0.015em]">
        Experience
      </h2>
      <div class="h-px bg-white/10 grow mt-2" aria-hidden="true"></div>
    </div>
    <div class="relative pl-8">
      <div class="absolute left-0 top-0 bottom-0 w-0.5 timeline-track"></div>
      <div :key="index" v-for="(data, index) in experience" class="relative">
        <div class="relative mb-12 last:mb-0">
          <div
            class="absolute -left-10.25 top-6 size-5 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(19,91,236,0.5)] last:shadow-[0_0_15px_rgba(19,91,236,0.2)]"
          ></div>

          <div class="glass-card rounded-xl p-6 transition-all duration-300">
            <div
              class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4"
            >
              <div>
                <h3 class="text-white text-xl font-bold">
                  {{ data?.position }}
                </h3>
                <p class="text-primary font-medium">{{ data?.corporation }}</p>
              </div>
              <span
                class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full self-start"
                >{{ data?.time?.start }} -
                {{ data?.time?.end ?? 'Present' }}</span
              >
            </div>
            <ul class="space-y-3 mb-6">
              <li
                :key="i"
                v-for="(item, i) in data?.jobDesc"
                class="flex items-center gap-3 text-[#92a4c9]"
              >
                <Icons
                  icon="material-symbols:check-circle"
                  class="size-5 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span
                :key="techKey"
                v-for="(tech, techKey) in data?.tech"
                class="px-2 py-1 rounded-full text-[11px] font-medium text-primary bg-primary/5 border border-primary/10"
                >{{ tech?.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
