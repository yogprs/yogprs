<script setup lang="ts">
import type { SpotifyPlaying, SpotifyResponse } from '@/types/data.type';
import axios from 'axios';
import querystring from 'querystring';
import { onMounted, onUnmounted, ref, watch } from 'vue';

onMounted(() => {
  getAccessToken();
});

onMounted(() => {
  interval.value = window.setInterval(updateTimer, 1000);
});

const token = ref<string>('');
const dataSong = ref<SpotifyPlaying>();
const progressMS = ref<number>();
const durationMS = ref<number>();
const interval = ref<number>();

const getAccessToken = async (): Promise<void> => {
  try {
    const basic = btoa(
      `${import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET}`,
    ).toString();
    const body = querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN,
    });
    const response = (await axios.post(
      import.meta.env.VITE_APP_SPOTIFY_TOKEN_ENDPOINT,
      body,
      {
        headers: {
          'Authorization': `Basic ${basic}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )) as SpotifyResponse;
    token.value = response?.data?.access_token;
  } catch (e) {
    console.error(e);
  }
};

const getNowPlaying = async () => {
  try {
    if (!token?.value) return;
    const response = (await axios.get(
      import.meta.env.VITE_APP_SPOTIFY_NOW_PLAYING_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      },
    )) as SpotifyPlaying;

    progressMS.value = response?.data?.progress_ms;
    durationMS.value = response?.data?.item?.duration_ms;
    dataSong.value = response;
  } catch (e) {
    console.error(e);
  }
};

const updateTimer = () => {
  if (!progressMS.value) return;
  if (!durationMS.value) return;
  progressMS.value += 1000; // naik 100 ms setiap 100 ms

  if (progressMS.value >= durationMS.value) {
    clearInterval(interval.value!);
    getNowPlaying();
  }
};

onUnmounted(() => {
  if (interval.value) clearInterval(interval.value);
});

watch(() => token.value, getNowPlaying, {
  immediate: true,
});
</script>
<template>
  <div class="text-black">
    <div
      class="relative w-full h-[1000px] md:h-screen flex flex-col md:justify-center z-[40] md:z-[45] pt-12 md:pt-0 px-10 md:px-12 md:overflow-hidden"
    >
      <div
        class="z-0 mb-12 md:mb-0 md:absolute top-1/4 md:left-[5%] md:-translate-y-16"
      >
        <div
          class="rounded-sm h-[400px] md:h-[500px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 opacity-[1] transform-none"
        >
          <img
            alt="yogprs"
            class="object-cover absolute inset-0 box-border p-0 border-none m-auto block w-0 md:h-0 h-[300px] min-w-full max-w-full md:min-h-full md:max-h-full"
            src="../assets/img/yopras2.jpg"
          />
        </div>
      </div>
      <div
        class="z-10 absolute w-auto max-w-[285px] md:max-w-max md:right-[8%] top-[40%] md:top-1/4 col-span-2 flex flex-col justify-center items-center md:items-start text-start md:px-10 py-4 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 md:px-0 text-4xl md:text-6xl font-bold"
        >
          About Me
        </span>
        <span
          class="w-full md:max-w-2xl text-xl mt-4 tracking-wider leading-[1.7rem] mb-5 text-justify"
        >
          Hello, I'm Yoga Prasetya, a passionate web developer with continuously
          evolving expertise in several technologies. I am from West Jakarta,
          Indonesia. I graduated with a bachelor's degree in information
          technology from Bina Sarana Informatika University. My job is to build
          responsive websites using several technologies. In addition, I am also
          very interested in learning about new and emerging technologies.
        </span>
        <div class="w-full h-[100px] md:px-12">
          <div
            class="relative w-full h-full flex items-center px-4 gap-2 md:gap-4 border border-gray-500 rounded-lg backdrop-filter backdrop-blur-lg bg-white hover:scale-105 duration-300"
          >
            <img
              v-if="dataSong?.data?.item?.album?.images"
              :src="dataSong?.data?.item?.album?.images[1]?.url"
              class="absolute h-full w-full inset-0 object-cover z-0 opacity-20 rounded-lg"
            />
            <div class="z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path
                  d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"
                ></path>
              </svg>
            </div>
            <div
              v-if="dataSong?.data"
              class="w-full h-full flex items-center gap-2 md:gap-4"
            >
              <span class="font-bold md:text-lg z-10 w-full md:w-fit"
                >Now Playing :</span
              >
              <span
                class="z-10 text-blue-500 font-semibold flex flex-col md:gap-2 overflow-hidden"
              >
                {{ dataSong?.data?.item?.name }}
                <!-- <span class="text-black font-normal">- </span> -->
                <span class="text-black font-normal w-[350px]">
                  {{
                    dataSong?.data?.item?.artists
                      ?.map((art) => art?.name)
                      ?.join(', ')
                  }}
                </span>
              </span>
            </div>
            <div v-else>
              <span class="font-bold md:text-lg">Currently Offline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto pt-14 pb-4 md:py-14">
      <div class="mt-0 md:mt-12 space-y-18">
        <div
          class="backdrop-blur-lg bg-[#8bcea2]/30 border border-gray-300/30 rounded-2xl p-8"
        >
          <h3 class="text-3xl font-bold text-black mb-6 text-center">
            Languages & Frameworks
          </h3>
          <div class="flex flex-wrap justify-center gap-3">
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="html"
                src="https://img.icons8.com/?id=20909&format=png&color=ffffff"
              />
              <span>HTML</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="css"
                src="https://img.icons8.com/?id=21278&format=png&color=ffffff"
              />
              <span>CSS</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="javascript"
                src="https://img.icons8.com/?id=108784&format=png&color=ffffff"
              />
              <span>JavaScript</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="typescript"
                src="https://img.icons8.com/?id=uJM6fQYqDaZK&format=png&color=ffffff"
              />
              <span>TypeScript</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="reactjs"
                src="https://img.icons8.com/?id=asWSSTBrDlTW&format=png&color=ffffff"
              />
              <span>ReactJs</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="nextjs"
                src="https://img.icons8.com/?id=yUdJlcKanVbh&format=png&color=ffffff"
              />
              <span>NextJs</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="vuejs"
                src="https://img.icons8.com/?id=BUnExfsRs3CW&format=png&color=ffffff"
              />
              <span>Vue</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#9575cd"
                  d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
                ></path>
              </svg>
              <span>Vite</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="tailwindcss"
                src="https://img.icons8.com/?id=4PiNHtUJVbLs&format=png&color=ffffff"
              />
              <span>TailwindCSS</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="nodejs"
                src="https://img.icons8.com/?id=hsPbhkOH4FMe&format=png&color=ffffff"
              />
              <span>NodeJs</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="express"
                src="https://img.icons8.com/?id=SDVmtZ6VBGXt&format=png&color=ffffff"
              />
              <span>Express.js</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="mysql"
                src="https://img.icons8.com/?id=UFXRpPFebwa2&format=png&color=ffffff"
              />
              <span>MySQL</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="postgresql"
                src="https://img.icons8.com/?id=Pv4IGT0TSpt8&format=png&color=ffffff"
              />
              <span>PostgreSQL</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="mongodb"
                src="https://img.icons8.com/?id=tBBf3P8HL0vR&format=png&color=ffffff"
              />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        <div
          class="backdrop-blur-lg bg-[#8bcea2]/30 border border-gray-300/30 rounded-2xl p-8"
        >
          <h3 class="text-3xl font-bold text-black mb-6 text-center">
            Tools & Technologies
          </h3>
          <div class="flex flex-wrap justify-center gap-3">
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#29b6f6"
                  d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
                ></path>
                <path
                  fill="#0277bd"
                  d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
                ></path>
                <path
                  fill="#0288d1"
                  d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
                ></path>
              </svg>
              <span>Visual Studio Code</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#F4511E"
                  d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                ></path>
              </svg>
              <span>Git</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#e64a19"
                  d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                ></path>
                <path
                  fill="#7c4dff"
                  d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                ></path>
                <path
                  fill="#66bb6a"
                  d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                ></path>
                <path
                  fill="#ff7043"
                  d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                ></path>
                <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
              </svg>
              <span>Figma</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#9575cd"
                  d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
                ></path>
              </svg>
              <span>Vite</span>
            </div>
            <div
              class="flex gap-2 items-center px-4 py-2 bg-gradient-to-r from-gray-200/60 to-white/40 border border-gray-400/40 rounded-full text-black font-medium backdrop-blur-sm hover:scale-105 transition-transform hover:bg-gradient-to-r hover:from-gray-300/60 hover:to-white/50"
            >
              <img
                alt="prismaorm"
                src="https://img.icons8.com/?id=aqb9SdV9P8oC&format=png&color=ffffffF"
              />
              <span>PrismaORM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-14 flex flex-col justify-center items-center w-full">
      <h1 class="text-3xl font-bold">Experience</h1>
    </div>
    <div class="container mx-auto py-8">
      <div class="flex justify-center items-center flex-col">
        <div class="w-full relative max-w-6xl mx-auto px-6">
          <div
            class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"
          ></div>
          <div class="space-y-12 md:space-y-16 relative">
            <div class="relative">
              <div
                class="hidden md:block absolute w-6 h-6 bg-black rounded-full border-4 border-gray-300 shadow-lg z-30 md:left-1/2 md:-translate-x-1/2 md:top-4 left-0 -translate-x-1/2 top-5"
              ></div>
              <div
                class="relative group md:mr-auto md:pr-12 md:w-1/2 pt-5 pb-2"
              >
                <div
                  class="bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300"
                >
                  <div class="mb-4">
                    <h3 class="text-xl font-bold text-black mb-1">
                      PT Qtera Mandiri
                      <span
                        class="hidden md:block text-lg font-medium text-gray-700"
                      >
                        • Sept 2024 - Mar 2025
                      </span>
                    </h3>
                    <span
                      class="block md:hidden text-lg font-medium text-gray-700"
                    >
                      Sept 2024 - Mar 2025
                    </span>
                    <h4 class="text-lg font-medium text-gray-700">
                      Front-End Programmer Internship
                    </h4>
                  </div>
                  <p class="text-gray-600 text-justify leading-relaxed mb-4">
                    Developed internal and external web applications using the
                    Vue.js with TypeScript. In developing these web
                    applications, I collaborate with the team to ensure the
                    functionality of the applications runs smoothly.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>Vue</span>
                    </div>
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>Vite</span>
                    </div>
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>TypeScript</span>
                    </div>
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>TailwindCSS</span>
                    </div>
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>Git</span>
                    </div>
                    <div
                      class="flex gap-2 items-center bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
                    >
                      <span>Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
