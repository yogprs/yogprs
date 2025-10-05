<script setup lang="ts">
import { onMounted, ref } from 'vue';

type LinkArchive = {
  github?: {
    previewText: string;
    link: string;
  }[];
  linkProject?: string;
};

type Archive = {
  year: number;
  title: string;
  technology: string;
  linkDetail: string;
  link?: LinkArchive;
};

onMounted(() => {
  setDataArchive();
});

const dataArchive = ref<Archive[]>();

const setDataArchive = (): void => {
  const data: Archive[] = [
    {
      year: 2025,
      title: 'CuacaWi',
      technology: 'Vue, TypeScript, TailwindCSS',
      linkDetail: '/cuacawi',
      link: {
        github: [
          {
            previewText: 'Repository Github',
            link: 'https://github.com/Fush1ren/CuacaWi',
          },
        ],
        linkProject: 'https://cuaca-wi.vercel.app',
      },
    },
    {
      year: 2025,
      title: 'Endang Stock',
      technology:
        'Vue, Express.js, TypeScript, PrimeVue, TailwindCSS, PrismaORM, PosgreSQL',
      linkDetail: '/endang-stock',
      link: {
        github: [
          {
            previewText: 'Repository Github (FE)',
            link: 'https://github.com/Fush1ren/endang_stock_fe',
          },
          {
            previewText: 'Repository Github (BE)',
            link: 'https://github.com/Fush1ren/endang_stock_be',
          },
        ],
        linkProject: 'https://endang-stock-fe.vercel.app',
      },
    },
    {
      year: 2024,
      title: 'Valnime',
      technology: 'ReactJs, TypeScript, TailwindCSS, Material UI',
      linkDetail: '/valnime',
      link: {
        github: [
          {
            previewText: 'Repository Github',
            link: 'https://github.com/Fush1ren/valnime',
          },
        ],
        linkProject: 'https://valnime.vercel.app',
      },
    },
    {
      year: 2024,
      title: 'Elecbill',
      technology: 'NextJs, JavaScript, TailwindCSS, PosgreSQL',
      linkDetail: '/elecbill',
      link: {
        github: [
          {
            previewText: 'Repository Github',
            link: 'https://github.com/Fush1ren/elecbill',
          },
        ],
        linkProject: 'https://elecbill.vercel.app',
      },
    },
  ];
  dataArchive.value = data;
};
</script>
<template>
  <div class="overflow-hidden text-black">
    <div class="min-h-screen w-full mt-10 md:mt-0 p-10">
      <div class="flex flex-col justify-center mt-8 mb-5 self-start">
        <h1 class="text-3xl font-bold mt-3 text-start">Archive</h1>
      </div>
      <div class="container mx-auto grid grid-cols-1">
        <table class="space-y-3 bg-[#8bcea2]/60 rounded-md w-full table-fixed">
          <thead>
            <tr class="hover:shadow-md transition-all ease duration-300">
              <th class="text-start p-4">Year</th>
              <th class="text-start p-4">Title</th>
              <th class="text-start p-4 break-words">Technology</th>
              <th class="text-start p-4">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr
              :key="i"
              v-for="(data, i) in dataArchive"
              class="hover:shadow-md transition-all ease duration-300"
            >
              <td class="p-4">{{ data?.year }}</td>
              <td class="p-4">
                <a :href="`/projects${data?.linkDetail}`">{{ data?.title }}</a>
              </td>
              <td class="p-4">{{ data?.technology }}</td>
              <td class="p-4">
                <div
                  class="flex flex-col md:flex-row justify-start items-center gap-2"
                >
                  <div
                    v-if="data?.link?.github"
                    :key="j"
                    v-for="(link, j) in data?.link?.github"
                  >
                    <a :href="link?.link" :title="link?.previewText">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="32"
                        height="32"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <a
                    v-if="data?.link?.linkProject"
                    :href="data?.link?.linkProject"
                    title="Preview the project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
td {
  word-break: break-all;
}
</style>
