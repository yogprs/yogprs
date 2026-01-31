<script setup lang="ts">
import { ref } from 'vue';
import Icons from './icons.vue';
import Tooltip from './tooltip.vue';
const showEmail = ref<boolean>(false);
const showLinked = ref<boolean>(false);
const copied = ref<boolean>(false);

const copyEmail = async () => {
  await navigator.clipboard.writeText('yogaprasetya1124@gmail.com');
  copied.value = true;

  setTimeout(() => {
    copied.value = false;
  }, 1800);
};
</script>

<template>
  <section id="contact" class="py-30">
    <div
      class="flex-1 flex justify-center bg-[#1a2233] p-8 lg:px-10 lg:py-24 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div
        class="max-w-300 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        <div class="flex flex-col gap-4">
          <h1
            class="text-white text-5xl font-black leading-tight tracking-[-0.033em]"
          >
            Let's Connect
          </h1>
          <p
            class="text-[#92a4c9] text-lg font-normal leading-relaxed max-w-md"
          >
            I'm currently available for freelance work and full-time
            opportunities. Have a project in mind? Let's build something amazing
            together.
          </p>
          <div class="flex flex-col gap-4 pt-4">
            <p class="text-white text-sm font-bold uppercase tracking-widest">
              Follow me
            </p>
            <div class="flex gap-4">
              <Tooltip position="bottom">
                <template #default>
                  <a
                    class="size-12 rounded-lg bg-[#232f48] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all"
                    href="https://www.instagram.com/yogprs"
                  >
                    <Icons class="text-lg" icon="mdi:instagram" />
                  </a>
                </template>

                <template #content>
                  <span>Instagram</span>
                </template>
              </Tooltip>
              <Tooltip position="bottom">
                <template #default>
                  <a
                    class="size-12 rounded-lg bg-[#232f48] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all"
                    href="https://github.com/yogprs"
                  >
                    <Icons
                      class="text-lg text-white rounded-full"
                      icon="mdi:github"
                    />
                  </a>
                </template>

                <template #content>
                  <span>Github</span>
                </template>
              </Tooltip>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <!-- Email -->
          <div
            class="flex items-center gap-4 bg-background-dark/50 border border-white/5 rounded-xl px-4 min-h-20 py-2 justify-between"
          >
            <a
              href="mailto:yogaprasetya1124@gmail.com"
              @mouseenter="showEmail = true"
              @mouseleave="showEmail = false"
              class="flex items-center gap-4 overflow-hidden flex-1"
            >
              <div class="flex items-center gap-4 overflow-hidden">
                <div
                  class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12"
                >
                  <Icons class="text-lg" icon="material-symbols:mail" />
                </div>
                <div class="flex flex-col justify-center">
                  <p class="text-white text-base font-semibold leading-normal">
                    Email
                  </p>
                  <div class="flex gap-2 items-end">
                    <p class="text-[#92a4c9] text-sm font-normal">
                      yogaprasetya1124@gmail.com
                    </p>
                    <Icons
                      v-if="showEmail"
                      class="text-base text-gray-300 hidden md:flex transition-all duration-300"
                      icon="material-symbols:arrow-outward"
                    />
                  </div>
                </div>
              </div>
            </a>
            <button
              @click="copyEmail"
              class="text-primary text-sm font-bold hover:underline shrink-0 cursor-pointer"
            >
              Copy
            </button>
          </div>
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/yogaprasetyapl"
            @mouseenter="showLinked = true"
            @mouseleave="showLinked = false"
            class="flex justify-between items-center bg-background-dark/50 border border-white/5 rounded-xl px-4 min-h-20 py-2"
          >
            <div class="flex items-center gap-4">
              <div
                class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12"
              >
                <Icons class="text-lg" icon="mdi:linkedin" />
              </div>
              <div class="flex flex-col justify-center">
                <p class="text-white text-base font-semibold leading-normal">
                  LinkedIn
                </p>
                <p class="text-[#92a4c9] text-sm font-normal">yogaprasetyapl</p>
              </div>
            </div>
            <Icons
              v-if="showLinked"
              class="text-xl text-gray-300 hidden md:flex transition-all duration-300"
              icon="material-symbols:arrow-outward"
            />
          </a>
          <!-- Availability -->
          <div
            class="flex items-center gap-4 bg-background-dark/50 border border-white/5 rounded-xl px-4 min-h-20 py-2"
          >
            <div
              class="text-emerald-500 flex items-center justify-center rounded-lg bg-emerald-500/10 shrink-0 size-12"
            >
              <Icons class="text-lg" icon="material-symbols:check-circle" />
            </div>
            <div class="flex flex-col justify-center">
              <p class="text-white text-base font-semibold leading-normal">
                Availability
              </p>
              <p class="text-[#92a4c9] text-sm font-normal">
                Available for new projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="copied"
        class="fixed top-20 right-3 z-50 flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
      >
        <Icons
          icon="material-symbols:check-circle"
          class="text-green-400 text-base"
        />
        Email copied to clipboard
      </div>
    </transition>
  </section>
</template>
