<script setup lang="ts">
import { contact } from "@/utils/information";
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-outline-variant py-10"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,55,138,0.08),transparent_70%)]"
    />

    <div
      class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left"
    >
      <!-- Left -->
      <div>
        <h3 class="text-xl font-bold text-on-surface">Yoga Prasetya</h3>

        <p class="mt-1 text-sm text-on-surface-variant">
          Fullstack Developer • Building modern web experiences
        </p>
      </div>

      <!-- Social -->
      <div class="flex items-center gap-3 text-on-surface-variant">
        <a
          :href="contact.socials[0].url"
          target="_blank"
          class="rounded-xl border border-outline-variant p-3 transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <Icon icon="mdi:github" class="text-xl" />
        </a>

        <a
          :href="contact.socials[1].url"
          target="_blank"
          class="rounded-xl border border-outline-variant p-3 transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <Icon icon="mdi:linkedin" class="text-xl" />
        </a>

        <a
          :href="`mailto:${contact.email}`"
          class="rounded-xl border border-outline-variant p-3 transition-all duration-300 hover:border-primary hover:text-primary"
        >
          <Icon icon="mdi:email-outline" class="text-xl" />
        </a>
      </div>
    </div>

    <!-- Bottom -->
    <div
      class="relative mx-auto mt-8 max-w-6xl border-t border-outline-variant px-6 pt-8 text-center"
    >
      <p class="text-sm text-on-surface-variant">
        © {{ new Date().getFullYear() }} Yoga Prasetya. All rights reserved.
      </p>

      <p class="mt-2 text-xs text-on-surface-variant/70">
        Designed & Developed with Vue, TypeScript, Tailwind CSS, GSAP, and
        Lenis.
      </p>
    </div>
  </footer>
</template>
