<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Icon } from "@iconify/vue";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();

let navbarTrigger: ScrollTrigger | null = null;

const initNavbarAnimation = () => {
  navbarTrigger?.kill();

  // Halaman selain home
  if (route.path !== "/") {
    gsap.set(".navbar-title", {
      opacity: 1,
      y: 0,
    });

    return;
  }

  // Home
  gsap.set(".navbar-title", {
    opacity: 0,
    y: 15,
  });

  navbarTrigger = ScrollTrigger.create({
    trigger: ".hero",
    start: "20% top",
    end: "50% top",
    scrub: true,

    onUpdate: (self) => {
      gsap.set(".navbar-title", {
        opacity: self.progress,
        y: 15 - self.progress * 15,
      });
    },
  });
};

onMounted(() => {
  initNavbarAnimation();
});

watch(
  () => route.path,
  async () => {
    setTimeout(() => {
      initNavbarAnimation();
      ScrollTrigger.refresh();
    }, 50);
  },
);

onUnmounted(() => {
  navbarTrigger?.kill();
});
</script>

<template>
  <nav class="navbar fixed top-0 left-0 right-0 z-50">
    <div class="mx-2 flex items-center justify-between px-2 py-5">
      <div class="navbar-title">
        <RouterLink to="/" class="text-2xl font-bold text-secondary">
          Yoga Prasetya
        </RouterLink>
      </div>

      <!-- <button
        class="group text-secondary transition-all duration-300 cursor-pointer"
      >
        <Icon
          icon="material-symbols:menu"
          class="h-6 w-6 transition-transform duration-300 group-hover:rotate-90"
        />
      </button> -->
    </div>
  </nav>
</template>
