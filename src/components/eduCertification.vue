<script setup lang="ts">
import certifications from '@/assets/json/certification.json';
import Icons from './icons.vue';
</script>

<template>
  <section class="py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Education -->
      <div>
        <div class="flex items-center gap-4 mb-6">
          <div
            class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
          >
            <Icons
              icon="material-symbols:school"
              class="text-primary text-2xl"
            />
          </div>
          <h2 class="text-white text-2xl font-bold tracking-[-0.015em]">
            Education
          </h2>
          <div class="h-px bg-white/10 grow mt-2" aria-hidden="true"></div>
        </div>
        <div class="space-y-6">
          <div class="flex gap-4 px-2">
            <div
              class="my-1 size-5 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(19,91,236,0.5)] last:shadow-[0_0_15px_rgba(19,91,236,0.2)]"
            ></div>
            <div>
              <h4 class="text-white font-bold">
                Bachelor of Science in Information Technology
              </h4>
              <p class="text-[#92a4c9] text-sm">
                Bina Sarana Informatika University, Indonesia
              </p>
              <p class="text-[#5b6e92] text-xs mt-1">2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Certifications -->
      <div>
        <div class="flex items-center gap-4 mb-6">
          <div
            class="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
          >
            <Icons
              icon="material-symbols:verified"
              class="text-primary text-2xl"
            />
          </div>
          <h2 class="text-white text-2xl font-bold tracking-[-0.015em]">
            Certifications
          </h2>
          <div class="h-px bg-white/10 grow mt-2" aria-hidden="true"></div>
        </div>
        <div class="space-y-6">
          <div
            :key="index"
            v-for="(data, index) in certifications?.data"
            class="flex gap-4 px-2"
          >
            <div
              class="my-1 size-5 rounded-full bg-primary border-4 border-background-dark shadow-[0_0_15px_rgba(19,91,236,0.5)] last:shadow-[0_0_15px_rgba(19,91,236,0.2)]"
            ></div>
            <div>
              <h4 class="text-white font-bold">
                {{ data?.name }}
              </h4>
              <p class="text-[#92a4c9] text-sm">
                {{ data?.publisher }}
              </p>
              <p
                class="text-[#5b6e92] text-xs mt-1 flex flex-row gap-2 items-center"
              >
                <span>Issued {{ data?.issued }}</span>
                <span v-if="data?.expired">Expired {{ data?.expired }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
