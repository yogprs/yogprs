<script setup lang="ts">
import { computed, onMounted } from "vue";

import gsap from "gsap";
import { certifications, contact, projects } from "@/utils/information";
import { getImage } from "@/utils/image";
import { Icon } from "@iconify/vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About.vue";
import TechStack from "./TechStack.vue";
import HeroSection from "./HeroSection.vue";
import Experience from "./Experience.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".project-card", {
    opacity: 0,
    y: 100,
    stagger: 0.12,
    duration: 1,
    ease: "power3.out",
  });

  gsap.utils.toArray(".project-image").forEach((img: any) => {
    gsap.from(img, {
      scale: 1.3,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
      },
    });
  });

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

  //   ScrollTrigger.create({
  //     trigger: ".certification-section",
  //     start: "top 75%",
  //     once: true,

  //     onEnter: () => {
  //       gsap.to(certCards, {
  //         y: -6,
  //         duration: 2,
  //         repeat: -1,
  //         yoyo: true,
  //         stagger: 0.2,
  //         ease: "sine.inOut",
  //       });
  //     },
  //   });

  gsap.from(".contact-card", {
    opacity: 0,
    y: 80,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 75%",
    },
  });

  gsap.from(".contact-section h2", {
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
    },
  });
});

const latestProjects = computed(() =>
  [...projects].sort((a, b) => b.year - a.year).slice(0, 2),
);

const latestCertifications = computed(() =>
  [...certifications]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3),
);

setTimeout(() => {
  ScrollTrigger.refresh();
}, 100);
</script>

<template>
  <main
    class="relative bg-background text-on-surface overflow-hidden font-inter"
  >
    <div class="relative">
      <div
        class="absolute -top-10 bottom-150 inset-0 bg-[radial-gradient(circle_at_center,#4f378a_0%,transparent_50%)] opacity-40"
      />
      <!-- Hero -->
      <HeroSection />
      <!-- About -->
      <About />
    </div>

    <!-- Experience -->
    <Experience />

    <!-- Tech -->
    <TechStack />

    <!-- Projects -->
    <section class="projects-preview-section py-40">
      <div class="mx-auto max-w-6xl max-auto px-6">
        <div class="mb-20 text-center">
          <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            SomeThings I’ve Built
          </p>

          <h2 class="text-5xl font-black text-on-surface">My Projects</h2>

          <p class="mx-auto mt-6 max-w-2xl text-on-surface-variant">
            A glimpse of some the projects I've been working on.
          </p>
        </div>
        <!-- PROJECTS -->
        <div class="grid gap-8 lg:grid-cols-2">
          <article
            v-for="project in latestProjects"
            :key="project.name"
            class="project-card group overflow-hidden rounded-4xl border border-outline-variant bg-surface-container/50 backdrop-blur-md hover:border-primary-fixed hover:shadow-md hover:shadow-primary-fixed-dim"
          >
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="getImage('projects', `${project.image}.png`) || ''"
                :alt="project.name"
                class="project-image h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
              />

              <div
                class="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur-md"
              >
                {{ project.year }}
              </div>
            </div>

            <div class="p-8">
              <h3
                class="text-2xl font-bold text-on-surface group-hover:text-primary"
              >
                {{ project.name }}
              </h3>

              <p class="mt-4 line-clamp-3 text-on-surface-variant">
                {{ project.description }}
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="stack in project.stack.slice(0, 5)"
                  :key="stack"
                  class="rounded-full border border-on-tertiary px-3 py-1 text-xs text-tertiary"
                >
                  {{ stack }}
                </span>

                <span
                  v-if="project.stack.length > 5"
                  class="rounded-full border border-on-tertiary px-3 py-1 text-xs text-tertiary"
                >
                  +{{ project.stack.length - 5 }}
                </span>
              </div>

              <!-- LINKS -->
              <div class="mt-8 flex flex-wrap gap-3">
                <a
                  v-for="repo in project.link.github"
                  :key="repo.url"
                  :href="repo.url"
                  target="_blank"
                  class="rounded-xl border flex items-center gap-2 border-outline-variant px-4 py-2 text-sm transition-all hover:border-primary hover:text-primary"
                >
                  <Icon
                    icon="devicon:github"
                    class="w-4 h-4 bg-white rounded-full"
                  />
                  <span>
                    {{ repo.text }}
                  </span>
                </a>

                <a
                  v-if="project.link.preview"
                  :href="project.link.preview ?? ''"
                  target="_blank"
                  class="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm text-on-primary-fixed transition-transform hover:scale-105"
                >
                  <Icon icon="material-symbols:rocket-launch" class="w-4 h-4" />
                  <span> Live Preview </span>
                </a>
              </div>
            </div>
          </article>
        </div>
        <!-- CTA -->
        <div class="mt-16 flex justify-center">
          <RouterLink
            to="/projects"
            viewTransition
            class="group flex items-center gap-3 rounded-2xl border border-primary bg-primary/10 px-8 py-4 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary-fixed"
          >
            <span class="animate-pulse"> View All Projects </span>
            <Icon
              icon="material-symbols:keyboard-arrow-right"
              class="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 animate-pulse"
            />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="certification-section relative py-40 overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,55,138,0.15),transparent_60%)]"
      />

      <div class="relative mx-auto max-w-6xl px-6">
        <!-- Header -->
        <div class="mb-20 text-center">
          <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
            Learning Journey
          </p>

          <h2 class="text-5xl font-black text-on-surface">Certifications</h2>

          <p class="mx-auto mt-6 max-w-2xl text-on-surface-variant">
            Certifications and achievements that reflect my continuous learning
            journey in various fields such as software development and
            technology or others.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="cert in latestCertifications"
            :key="cert.name"
            class="cert-card group overflow-hidden rounded-[28px] border border-outline-variant bg-surface-container/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-primary"
          >
            <!-- Image -->
            <div class="relative aspect-4/3 overflow-hidden">
              <img
                :src="getImage('certifications', `${cert.image}.png`) || ''"
                :alt="cert.name"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <p class="text-sm text-primary">
                {{ cert.date }}
              </p>

              <h3 class="mt-2 text-xl font-bold text-on-surface">
                {{ cert.name }}
              </h3>

              <p class="mt-1 text-sm text-on-surface-variant">
                {{ cert.company }}
              </p>

              <p
                class="mt-4 line-clamp-3 text-sm leading-relaxed text-on-surface-variant"
              >
                {{ cert.description }}
              </p>

              <a
                v-if="cert.verify_url"
                :href="cert.verify_url"
                target="_blank"
                class="mt-6 inline-flex items-center gap-2 rounded-xl border border-outline-variant px-4 py-2 text-sm transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <span> Verify Certificate </span>
                <Icon icon="carbon:launch" class="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>

        <!-- View All -->
        <div class="mt-16 flex justify-center">
          <RouterLink
            to="/certifications"
            viewTransition
            class="group flex items-center gap-3 rounded-2xl border border-primary bg-primary/10 px-8 py-4 font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary-fixed"
          >
            <span class="animate-pulse"> View All Certifications </span>

            <Icon
              icon="material-symbols:keyboard-arrow-right"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 animate-pulse"
            />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="contact-section relative overflow-hidden py-40">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,55,138,0.2),transparent_60%)]"
      />

      <div class="relative mx-auto max-w-5xl px-6">
        <div
          class="overflow-hidden rounded-[40px] border border-outline-variant bg-surface-container/40 p-8 backdrop-blur-md lg:p-16"
        >
          <div class="text-center">
            <p class="mb-4 text-sm uppercase tracking-[0.4em] text-primary">
              Get In Touch
            </p>

            <h2
              class="mx-auto max-w-3xl text-5xl font-black leading-tight text-on-surface lg:text-7xl"
            >
              Let's Build Something Amazing Together
            </h2>

            <p
              class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant"
            >
              I'm always interested in new opportunities, freelance projects,
              and collaborations. Feel free to reach out if you have an idea or
              just want to connect.
            </p>
          </div>

          <!-- CTA -->
          <div
            class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              :href="`mailto:${contact.email}`"
              class="group flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 font-medium text-on-primary-fixed transition-all duration-300 hover:scale-105"
            >
              Say Hello
              <Icon
                icon="material-symbols:arrow-right-alt"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <!-- <a
              :href="contact.cv ?? ''"
              target="_blank"
              class="rounded-2xl border border-outline-variant px-8 py-4 font-medium transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Download CV
            </a> -->
          </div>

          <!-- Contact Info -->
          <div class="mt-16 grid gap-6 md:grid-cols-3">
            <div
              class="contact-card rounded-3xl border border-outline-variant bg-surface-container/30 p-6"
            >
              <p class="mb-2 text-xs uppercase tracking-widest text-primary">
                Email
              </p>

              <a
                :href="`mailto:${contact.email}`"
                class="font-medium text-on-surface"
              >
                {{ contact.email }}
              </a>
            </div>

            <div
              class="contact-card rounded-3xl border border-outline-variant bg-surface-container/30 p-6"
            >
              <p class="mb-2 text-xs uppercase tracking-widest text-primary">
                Location
              </p>

              <p class="font-medium text-on-surface">{{ contact.location }}</p>
            </div>

            <div
              class="contact-card rounded-3xl border border-outline-variant bg-surface-container/30 p-6"
            >
              <p class="mb-2 text-xs uppercase tracking-widest text-primary">
                Availability
              </p>

              <p class="font-medium text-on-surface">
                {{ contact.availability }}
              </p>
            </div>
          </div>

          <!-- Social -->
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a
              v-for="(social, index) in contact.socials"
              :key="index"
              :href="social?.url"
              target="_blank"
              class="flex items-center gap-2 rounded-xl border border-outline-variant px-5 py-3 transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <Icon
                v-if="social?.name?.toLowerCase() === 'instagram'"
                icon="mdi:instagram"
                class="w-6 h-6"
              />
              <Icon
                v-else-if="social?.name?.toLowerCase() === 'linkedin'"
                icon="mdi:linkedin"
                class="w-6 h-6"
              />
              <Icon v-else icon="mdi:github" class="w-6 h-6" />
              <span>
                {{ social?.name }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
