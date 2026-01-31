<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Footer from './components/footer.vue';
import Icons from './components/icons.vue';
import Navbar from './components/navbar.vue';
import HeroSection from './components/heroSection.vue';
import Aboutme from './components/aboutme.vue';
import Skills from './components/skills.vue';
import Projects from './components/projects.vue';
import Contact from './components/contact.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Yoga Prasetya - Junior Fullstack Developer',
  meta: [
    {
      name: 'description',
      content:
        'My portfolio projects built with Vue, Tailwind, GSAP & TypeScript',
    },
    { property: 'og:title', content: 'YOGPRS — Portfolio' },
    {
      property: 'og:description',
      content: 'Explore my web development projects & skills.',
    },
    {
      name: 'keywords',
      content:
        'Yoga Prasetya, Portofolio, yogprs, Vue.js, TailwindCSS, tailwind, typescript, GSAP',
    },
    { property: 'og:image', content: 'https://yogprs.my.id/logo-yp.png' },
    { property: 'og:url', content: 'https://yogprs.my.id' },
    { property: 'og:type', content: 'website' },
    {
      name: 'author',
      content: 'Yoga Prasetya',
    },
  ],
});

const showScrollTop = ref<boolean>(false);

const onScroll = () => {
  // show button if scroll > 200px
  showScrollTop.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  // set first condition
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <div
    class="w-full h-full text-white bg-background-light dark:bg-background-dark"
  >
    <navbar />
    <div class="max-w-7xl mx-auto px-6 lg:pb-2 lg:px-10 overflow-x-hidden">
      <HeroSection />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
    <Footer />
  </div>
  <section class="hidden md:flex justify-center items-center">
    <div
      v-show="showScrollTop"
      @click="scrollToTop"
      class="p-2 fixed bottom-[5%] right-[1.5%] z-50 cursor-pointer bg-background-light dark:bg-primary text-black dark:text-white shadow-lg shadow-primary/40 ring-1 ring-primary/30 hover:bg-primary/60 transition-all duration-300 rounded-full"
    >
      <Icons icon="material-symbols:arrow-upward" class="text-xl" />
    </div>
  </section>
</template>
