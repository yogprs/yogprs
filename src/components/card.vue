<script setup lang="ts">
import type { CardProps } from '@/types/card';
import { computed, nextTick, onMounted, ref } from 'vue';
import Tooltip from './tooltip.vue';
import Dialog from './dialog.vue';
import Icons from './icons.vue';

const props = defineProps<CardProps>();

const techContainer = ref<HTMLElement | null>(null);
const visibleCount = ref<number>(props.data?.tech?.length || 0);
const showTooltip = ref<boolean>(false);
const openDialog = ref<boolean>(false);
const dialogTitle = ref<string>('');

const hiddenTech = computed(
  () => props.data?.tech?.slice(visibleCount.value) || [],
);

onMounted(async () => {
  await nextTick();

  if (!techContainer.value) return;

  const el = techContainer.value;
  const badges = Array.from(el.children) as HTMLElement[];

  if (badges.length === 0) return;

  const firstRowTop = badges[0]!.offsetTop;

  let count = 0;
  for (const badge of badges) {
    if (badge.offsetTop === firstRowTop) {
      count++;
    } else {
      break;
    }
  }

  visibleCount.value = count;
});

const goRoute = (path: string) => {
  if (!path) return;
  return window.open(path, '_blank');
};
</script>

<template>
  <div
    class="group h-full flex flex-col bg-white dark:bg-[#1a2233] rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 transition-all hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
  >
    <div class="relative aspect-video overflow-hidden">
      <div
        class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
        :data-alt="data?.name"
        :style="{
          backgroundImage: `url(${data?.image})`,
        }"
      ></div>
      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
      >
        <span
          class="text-white text-xs font-bold uppercase tracking-widest px-2 py-1 bg-primary rounded"
          >{{ data?.current ? 'Currenly Project' : data?.year }}</span
        >
      </div>
    </div>
    <div class="p-6 flex flex-col justify-between flex-1">
      <div ref="techContainer" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tech, index) in data?.tech.slice(0, visibleCount)"
          :key="index"
          class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300 first:bg-primary/10 first:text-primary first:dark:bg-primary/20 first:dark:text-primary"
        >
          {{ tech }}
        </span>
        <Tooltip
          v-if="hiddenTech.length"
          v-model:visible="showTooltip"
          position="top"
        >
          <template #default>
            <span
              class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-300 cursor-default"
            >
              +{{ hiddenTech.length }} more
            </span>
          </template>

          <template #content>
            <span>{{ hiddenTech?.join(', ') }}</span>
          </template>
        </Tooltip>
      </div>
      <h3
        class="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
      >
        {{ data?.name }}
      </h3>
      <p
        class="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed mb-6 flex-1"
      >
        {{ data?.description }}
      </p>
      <div class="grid grid-cols-2 gap-3 mt-auto">
        <button
          @click="goRoute(data?.link)"
          class="flex items-center justify-center gap-2 rounded-lg h-10 px-3 bg-primary text-white text-xs font-bold transition-all hover:brightness-110 hover:cursor-pointer"
        >
          <Icons class="text-base" icon="material-symbols:rocket-launch" />
          Live Demo
        </button>
        <button
          @click="
            () => {
              dialogTitle = data?.name;
              openDialog = true;
            }
          "
          class="flex items-center justify-center gap-2 rounded-lg h-10 px-3 bg-slate-100 dark:bg-[#232f48] text-slate-700 dark:text-white text-xs font-bold transition-all hover:bg-slate-200 dark:hover:bg-[#2c3b5a] hover:cursor-pointer"
        >
          <Icons class="text-base" icon="material-symbols:code" />
          Source
        </button>
      </div>
    </div>
  </div>

  <Dialog v-model="openDialog" :title="`Project - ${dialogTitle}`">
    <h1 class="font-semibold text-lg text-gray-100">Source Code</h1>
    <div class="flex flex-row gap-2 py-2">
      <button
        :key="index"
        v-for="(item, index) in data?.detail?.github"
        @click="goRoute(item?.link)"
        class="flex items-center justify-center gap-2 rounded-lg h-10 px-3 bg-primary text-white text-xs font-bold transition-all hover:brightness-110 hover:cursor-pointer"
      >
        <Icons class="text-base" type="devicon" icon="github" />
        {{ item?.text }}
      </button>
    </div>
  </Dialog>
</template>
