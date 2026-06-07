<script setup lang="ts">
// import { useLenis } from "./composables/useLenis";

// useLenis();

import { lenis } from "@/lib/lenis";
import gsap from "gsap";

const raf = (time: number) => {
  lenis.raf(time * 1000);
};

gsap.ticker.add(raf);
gsap.ticker.lagSmoothing(0);
</script>

<template>
  <RouterView />
</template>
