<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { gsap } from 'gsap';
import Icons from './icons.vue';
import techs from '@/assets/json/technology.json';

onMounted(() => {
  setSlideShow();
});

const typeShow = ref<'slideshow' | 'apps'>('slideshow');
const track = ref<HTMLElement | null>(null);

const setSlideShow = async (): Promise<void> => {
  await nextTick(); //

  const el = track.value;
  if (!el) return;

  const singleWidth = el.scrollWidth / 2;

  gsap.set(el, { x: 0 });

  const tween = gsap.to(el, {
    x: -singleWidth,
    duration: 30,
    ease: 'none',
    repeat: -1,
  });

  el.parentElement?.addEventListener('mouseenter', () => tween.pause());
  el.parentElement?.addEventListener('mouseleave', () => tween.resume());
};

const setTypeShow = (type: 'slideshow' | 'apps'): void => {
  if (typeShow.value === type) return;
  typeShow.value = type;
};

watch(
  () => typeShow.value,
  (newType) => {
    if (newType === 'slideshow') {
      setSlideShow();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <section id="skills" class="w-full h-full py-24">
    <div class="flex items-center gap-4 mb-2">
      <div class="h-px bg-white/10 grow mt-2" aria-hidden="true"></div>
      <h2 class="text-white text-3xl font-bold tracking-[-0.015em]">
        Tech Stack
      </h2>
      <div class="h-px bg-white/10 grow mt-2" aria-hidden="true"></div>
    </div>
    <div class="flex justify-end pt-4 pb-4 md:pt-0">
      <div class="flex items-center px-4">
        <span class="text-gray-400 font-semibold">View : </span>
      </div>
      <div class="flex gap-2">
        <button
          @click="setTypeShow('slideshow')"
          :class="`p-2 glass-card rounded-lg hover:cursor-pointer transition-colors ${typeShow === 'slideshow' ? 'text-primary border border-primary!' : 'text-white hover:text-primary'}`"
        >
          <Icons
            class="text-xl sm:text-2xl"
            icon="material-symbols:transition-slide"
          />
        </button>
        <button
          @click="setTypeShow('apps')"
          :class="`p-2 glass-card rounded-lg hover:cursor-pointer transition-colors ${typeShow === 'apps' ? 'text-primary border border-primary!' : 'text-white hover:text-primary'}`"
        >
          <Icons
            class="text-xl sm:text-2xl"
            icon="material-symbols:grid-view"
          />
        </button>
      </div>
    </div>
    <div v-if="typeShow === 'slideshow'" class="relative mx-auto py-8">
      <div
        class="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"
      ></div>
      <div class="overflow-hidden">
        <div ref="track" class="flex w-max">
          <div
            v-for="(tech, i) in techs.data"
            :key="i"
            class="min-w-28 box-border pr-8 text-center whitespace-nowrap group"
          >
            <div class="flex flex-col gap-2">
              <div
                class="glass-card flex flex-col items-center p-6 rounded-xl transition-all duration-300"
              >
                <Icons
                  :icon="tech?.icon"
                  type="devicon"
                  class="text-3xl sm:text-4xl group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <span class="text-[#92a4c9] group-hover:text-primary">
                {{ tech?.name }}
              </span>
            </div>
          </div>

          <!-- duplicate for smooth loop -->
          <div
            v-for="(tech, i) in techs.data"
            :key="'dup-' + i"
            class="min-w-28 box-border pr-8 text-center whitespace-nowrap group"
          >
            <div class="flex flex-col gap-2">
              <div
                class="glass-card flex flex-col items-center p-6 rounded-xl transition-all duration-300"
              >
                <Icons
                  :icon="tech?.icon"
                  type="devicon"
                  class="text-3xl sm:text-4xl group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <span class="text-[#92a4c9] group-hover:text-primary">
                {{ tech?.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="py-12">
      <div
        class="grid grid-cols-3 gap-8 md:grid-cols-6 md:gap-10 lg:grid-cols-10 lg:gap-10"
      >
        <div
          v-for="(tech, i) in techs.data"
          :key="i"
          class="min-w-15 box-border text-center whitespace-nowrap group"
        >
          <div class="flex flex-col gap-2">
            <div
              class="glass-card flex flex-col items-center p-6 rounded-xl transition-all duration-300"
            >
              <Icons
                :icon="tech?.icon"
                type="devicon"
                class="text-3xl sm:text-4xl group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <span class="text-[#92a4c9] group-hover:text-primary">
              {{ tech?.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
