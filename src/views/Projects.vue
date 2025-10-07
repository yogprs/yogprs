<script setup lang="ts">
import { useRouter } from 'vue-router';
import dataJson from '@/json/dataProject.json';
import { onMounted, ref } from 'vue';
import type { DataProject } from '@/types/data.type';
import ImgCuacawi from '@/assets/img/projects/cuacawi/thumbnail.png';
import ImgEndangStock from '@/assets/img/projects/endangstock/thumbnail.png';
import ImgValnime from '@/assets/img/projects/valnime/thumbnail.png';
import ImgElecbill from '@/assets/img/projects/elecbill/thumbnail.png';

const router = useRouter();
const data = ref<DataProject[]>();

onMounted(() => {
  getData();
});

const splitData = (str: string): string[] => {
  if (!str) return [];
  return str.split(',').map((item) => item.trim());
};

const getImage = (path: string) => {
  if (!path) return;
  switch (path) {
    case 'cuacawi':
      return ImgCuacawi;
    case 'endang-stock':
      return ImgEndangStock;
    case 'valnime':
      return ImgValnime;
    default:
      return ImgElecbill;
  }
};

const buttonRoute = (path: string): void => {
  if (!path) return;
  router.push(`/${path}`);
};

const getData = (): void => {
  data.value = dataJson?.data;
};
</script>
<template>
  <div class="text-black">
    <div
      class="relative w-full h-[700px] md:h-screen flex flex-col md:justify-center z-[40] md:z-[45] pt-12 md:pt-0 px-10 md:px-12 md:overflow-hidden"
    >
      <div
        class="z-0 mb-12 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16"
      >
        <div
          class="rounded-sm h-[400px] md:h-[500px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 opacity-[1] transform-none"
        >
          <img
            alt="yogprs"
            class="object-cover absolute inset-0 box-border p-0 border-none m-auto block w-0 md:h-0 h-[300px] min-w-full max-w-full md:min-h-full md:max-h-full"
            src="../assets/img/code.jpg"
          />
        </div>
      </div>
      <div
        class="z-10 absolute w-auto max-w-[285px] md:max-w-max md:left-[8%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-center md:items-start text-start md:px-10 py-4 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 md:px-0 text-4xl md:text-6xl font-bold"
        >
          Projects
        </span>
        <span
          class="w-full md:max-w-xl text-xl mt-4 tracking-wider leading-[1.7rem] mb-5 text-justify"
        >
          List of of projects I have completed and am currently working on.
        </span>
      </div>
    </div>
    <div class="mt-0 md:mt-12 mb-12 space-y-18">
      <h3 class="text-3xl font-bold text-black mb-6 text-center">
        Project List
      </h3>
    </div>
    <div
      class="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 cursor-pointer"
    >
      <a
        :key="i"
        v-for="(project, i) in data"
        @click="buttonRoute(`projects/${project?.path}`)"
        class="cursor-pointer"
        :title="project?.project_name"
      >
        <div
          class="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/eds py-20 px-5 md:py-2 aspect-video rounded-xl"
        >
          <img
            :alt="project?.path"
            :src="getImage(project?.path)"
            class="absolute h-full w-full inset-0 object-cover text-transparent bg-slate-950 opacity-10 group-hover/eds:opacity-100 transition-all ease duration-500 rounded-xl"
          />
          <div class="absolute top-0 left-0 bg-gray-600 px-4 py-2">
            <h3 class="text-white">{{ project?.year }}</h3>
          </div>
          <div
            class="transition-all ease duration-500 opacity-100 text-center group-hover/eds:opacity-0 z-10 w-full"
          >
            <h1 class="text-3xl font-bold mb-3">{{ project?.project_name }}</h1>
            <p>
              {{ project?.thumbnail_description }}
            </p>
            <div
              class="flex flex-row justify-center items-center mt-5 flex-wrap"
            >
              <span
                :key="j"
                v-for="(tech, j) in splitData(project?.technology)"
                class="m-1 px-4 py-2 bg-secondary text-white rounded-md"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div
      class="flex flex-col justify-center items-center mt-5 pb-4 self-start opacity-[1]"
    >
      <button
        @click="buttonRoute('projects/archive')"
        class="mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border cursor-pointer"
      >
        <a title="Archive Project">View the Archive</a>
      </button>
    </div>
  </div>
</template>
