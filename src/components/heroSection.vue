<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // gsap.to(".hero-title", {
  //   y: -250,
  //   scrollTrigger: {
  //     trigger: ".hero",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //   },
  // });

  gsap.to(".hero-title", {
    opacity: 0,
    scale: 0.9,
    y: -250,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "50% top",
      scrub: true,
    },
  });

  gsap.to(".hero-subtitle", {
    y: -150,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
</script>

<template>
  <section
    class="hero relative flex min-h-screen items-center justify-center mx-4"
  >
    <div class="relative z-10 text-center">
      <p
        class="hero-subtitle mb-4 text-sm uppercase font-bold tracking-[0.4em] text-on-surface animate-pulse"
      >
        Fullstack Developer
      </p>

      <h1 class="hero-title text-6xl font-black md:text-9xl text-primary">
        YOGA
        <br />
        PRASETYA
      </h1>

      <p class="mx-auto mt-6 max-w-xl text-on-surface-variant">
        Building scalable, high-performance web applications using modern
        technologies and clean architecture.
      </p>
    </div>
  </section>
</template>
