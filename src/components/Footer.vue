<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Icons from './icons.vue';
import Tooltip from './tooltip.vue';

const year = ref<number>();

onMounted(() => setYear());

const setYear = () => {
  year.value = new Date().getFullYear();
};
</script>

<template>
  <footer
    class="border-t border-slate-200 dark:border-[#232f48] py-12 bg-white dark:bg-background-dark/50"
  >
    <div
      class="max-w-300 mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="flex flex-col items-center md:items-start">
        <div class="flex items-center gap-2 mb-2">
          <span class="font-bold">YOGPRS</span>
        </div>
        <p class="text-slate-500 text-sm">
          © {{ year }} Built with care by Yoga Prasetya
        </p>
      </div>
      <div class="flex gap-6">
        <Tooltip position="top">
          <template #default>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="mailto:yogaprasetya1124@gmail.com"
            >
              <Icons class="text-2xl" icon="material-symbols:alternate-email" />
            </a>
          </template>

          <template #content>
            <span>Email</span>
          </template>
        </Tooltip>
        <Tooltip position="top">
          <template #default>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="https://github.com/yogprs"
            >
              <Icons class="text-2xl" icon="mdi:github" />
            </a>
          </template>

          <template #content>
            <span>Github</span>
          </template>
        </Tooltip>
        <Tooltip position="top">
          <template #default>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="https://www.linkedin.com/in/yogaprasetyapl"
            >
              <Icons class="text-2xl" icon="mdi:linkedin" />
            </a>
          </template>

          <template #content>
            <span>LinkedIn</span>
          </template>
        </Tooltip>
        <Tooltip position="top">
          <template #default>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="https://tako.id/yogprs"
            >
              <Icons class="text-2xl" icon="material-symbols:money-bag" />
            </a>
          </template>

          <template #content>
            <span>Support me</span>
          </template>
        </Tooltip>
      </div>
    </div>
  </footer>
</template>
