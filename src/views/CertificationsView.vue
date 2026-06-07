<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { certifications } from "@/utils/information";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/vue";
import { getImage } from "@/utils/image";
import { RouterLink } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const certCards = gsap.utils.toArray(".cert-card");
  gsap.fromTo(
    certCards,
    {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 0.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".certification-section",
        start: "top 75%",
        once: true,
      },
    },
  );
});
</script>

<template>
  <main
    class="relative bg-background text-on-surface overflow-hidden font-inter"
  >
    <section class="certification-section relative pt-20 pb-40">
      <div class="relative mx-auto max-w-7xl px-6">
        <RouterLink
          to="/"
          class="flex items-center cursor-pointer hover:text-primary transition-all hover:font-semibold"
        >
          <Icon
            icon="material-symbols:keyboard-arrow-left"
            class="w-[1.25em] h-[1.25em]"
          />
          <span>Back</span>
        </RouterLink>
        <div class="mb-20 text-center">
          <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Credentials
          </p>

          <h2 class="text-5xl font-black text-on-surface">Certifications</h2>

          <p class="mx-auto mt-6 max-w-2xl text-on-surface-variant">
            Certifications and professional credentials that demonstrate my
            technical knowledge and commitment to continuous learning.
          </p>
        </div>

        <div class="flex flex-col gap-8">
          <article
            v-for="certification in certifications"
            :key="certification.name"
            class="cert-card group overflow-hidden rounded-4xl border border-outline-variant bg-surface-container/50 backdrop-blur-md transition-all duration-500 hover:border-primary"
          >
            <div class="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              <!-- Image -->
              <div class="relative overflow-hidden">
                <img
                  :src="
                    getImage('certifications', `${certification.image}.png`) ||
                    ''
                  "
                  :alt="certification.name"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  class="absolute inset-0 bg-linear-to-t from-background/70 to-transparent"
                />
              </div>

              <!-- Content -->
              <div class="p-8 lg:p-10">
                <div class="flex flex-wrap items-center gap-3">
                  <span
                    class="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {{ certification.date }}
                  </span>
                </div>

                <h3 class="mt-5 text-3xl font-bold text-on-surface">
                  {{ certification.name }}
                </h3>

                <p class="mt-2 text-lg text-primary">
                  {{ certification.company }}
                </p>

                <p class="mt-5 leading-relaxed text-on-surface-variant">
                  {{ certification.description }}
                </p>

                <div class="mt-8">
                  <a
                    v-if="certification.verify_url"
                    :href="certification.verify_url"
                    target="_blank"
                    class="inline-flex items-center gap-2 rounded-2xl border border-primary bg-primary/10 px-5 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary-fixed"
                  >
                    Verify Credential

                    <Icon icon="carbon:launch" class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
