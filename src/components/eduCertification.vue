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

            <!-- <ImagePreview
              v-model="showPreview"
              src="https://instagram.fcgk22-1.fna.fbcdn.net/v/t39.30808-6/623772854_1324073226416807_2889791063899299394_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzgyMjE3MjgxNjIyMTg5NjQ3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=WzFj7tJqBnwQ7kNvwHH9oaE&_nc_oc=AdmzYzYteHS5MI5z8Y8Sf6gJAb_rSk6Bd_AmmlGuvPvAJSX-luljOGgvcBZG3IeaJmo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk22-1.fna&_nc_gid=CLeFuW6QUrbXF0OWLb4Ykw&oh=00_AfstXcKjwgaNYYdJAod5ctoVR-n9bJdymvnhFz0PMTjfrQ&oe=6983F307"
              alt="Project preview"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
