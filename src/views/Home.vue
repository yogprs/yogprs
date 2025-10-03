<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const buttonRoute = (path: string): void => {
  if (!path) return;
  router.push(`/${path}`);
};
</script>
<template>
  <div class="text-black">
    <div
      id="home"
      class="w-full h-screen flex flex-col justify-center z-[45] px-10 md:px-12"
    >
      <div class="max-h-[100dvh]">
        <div
          class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden"
        >
          <div
            class="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start opacity-[1] transform-none"
          >
            <span class="uppercase text-xl mb-3 font-normal tracking-[.5rem]">
              Yoga Prasetya
            </span>
            <h1
              class="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold my-2 md:my-5 opacity-[1] transform-none"
            >
              Front End Web Developer
            </h1>
            <p
              class="text-md 2xl:text-xl mt-4 tracking-wider leading-[1.7rem] opacity-[1] transform-none"
            >
              Hi, I'am a software engineer with an interest and passion for web
              development. I'am passionate about building diverse, user friendly
              web applications and exploring various technologies that can be
              used in development.
            </p>
            <div
              class="flex flex-row justify-center items-center space-x-4 mt-10 opacity-[1] transform-none"
            >
              <button
                class="mr-3 rounded-2xl px-3 md:px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
              >
                <a target="_blank" rel="noopener noreferrer" download>
                  Download CV
                </a>
              </button>
              <button
                class="mr-3 rounded-2xl px-3 md:px-8 py-2 shadow-md transition duration-300 ease-in-out bg-transparent hover:bg-secondary border-black hover:border-secondary border-2 text-secondary hover:text-white box-border hover:cursor-pointer"
              >
                <a href="/#contact"> Contact Me </a>
              </button>
            </div>
          </div>
          <div
            class="hidden md:flex col-span-1 mx-auto justify-center items-center opacity-[1] transform-none"
          >
            <div class="rounded-full h-auto w-auto lg:px-12">
              <img
                alt="yogprs"
                src="../assets/img/yp.png"
                class="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="about"
      class="relative h-screen w-full gap-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <div
        class="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:left-[5%] md:-translate-y-16"
      >
        <div
          class="rounded-sm h-[400px] md:h-[500px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 opacity-[1] transform-none"
        >
          <img
            alt="yogprs"
            class="object-cover absolute inset-0 box-border p-0 border-none m-auto block w-0 md:h-0 h-[300px] min-w-full max-w-full md:min-h-full md:max-h-full"
            src="../assets/img/yopras.jpg"
          />
        </div>
      </div>
      <div
        class="z-10 w-full absolute md:w-auto md:right-[18%] top-[62%] md:top-1/3 col-span-2 flex flex-col justify-center items-center md:items-start text-start px-10 py-4 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 px-3 md:px-0 text-4xl md:text-6xl font-bold"
        >
          About Me
        </span>
        <span
          class="max-w-[480px] text-xl mt-4 tracking-wider leading-[1.7rem] mb-5"
        >
          A brief introduction about myself and the technologies used in web
          development.
        </span>
        <button
          @click="buttonRoute('about')"
          class="mr-3 rounded-2xl px-3 md:px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
        >
          <a> Learn More </a>
        </button>
      </div>
    </div>
    <div
      id="projects"
      class="relative h-screen w-full gap-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <div
        class="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16"
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
        class="z-10 w-full absolute md:w-auto md:left-[8%] top-[62%] md:top-1/3 col-span-2 flex flex-col justify-center items-center md:items-start text-start px-10 py-4 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 px-3 md:px-0 text-4xl md:text-6xl font-bold"
        >
          My Projects
        </span>
        <span
          class="w-full max-w-2xl text-xl mt-4 tracking-wider leading-[1.7rem] mb-5"
        >
          This is a list of projects i have completed and am currently working
          on.
        </span>
        <button
          class="mr-3 rounded-2xl px-3 md:px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
        >
          <a target="_blank" rel="noopener noreferrer" download> Learn More </a>
        </button>
      </div>
    </div>
    <div
      id="contact"
      class="relative h-screen w-full gap-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <div
        class="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:left-[5%] md:-translate-y-16"
      >
        <div
          class="rounded-sm h-[400px] md:h-[500px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 opacity-[1] transform-none"
        >
          <img
            alt="yogprs"
            class="object-cover absolute inset-0 box-border p-0 border-none m-auto block w-0 md:h-0 h-[300px] min-w-full max-w-full md:min-h-full md:max-h-full"
            src="../assets/img/contact.jpg"
          />
        </div>
      </div>
      <div
        class="z-10 w-full absolute md:w-auto md:right-[0%] top-[58%] md:top-1/3 col-span-2 flex flex-col justify-center items-center md:items-start text-start px-10 py-4 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 px-3 md:px-0 text-4xl md:text-6xl font-bold"
        >
          Contact Me
        </span>
        <span
          class="block w-full max-w-2xl text-xl mt-4 tracking-wider leading-[1.7rem] mb-5 break-words"
        >
          Feel free to contact me if you would like to a discuss a project or
          just want to chat.
        </span>
        <a
          class="text-xl w-full max-w-2xl tracking-wider leading-[1.7rem] mb-5"
          href="mailto:yogaprasetya1124@gmail.com?subject=Hello&body=Hello Yoga Praseta,"
        >
          yogaprasetya1124@gmail.com
        </a>
        <div class="flex w-full max-w-2xl items-center space-x-4">
          <a
            class="flex justify-center items-center bg-secondary hover:bg-gray-400 w-14 h-14 rounded-full transition-all ease-in-out duration-300 hover:cursor-pointer"
            href="mailto:yogaprasetya1124@gmail.com?subject=Hello&body=Hello Yoga Praseta,"
          >
            <img
              alt="email"
              src="https://img.icons8.com/?size=30&id=53435&format=png&color=ffffff"
            />
          </a>
          <a
            class="flex justify-center items-center bg-secondary hover:bg-gray-400 w-14 h-14 rounded-full transition-all ease-in-out duration-300 hover:cursor-pointer"
            href="https://instagram.com/yogprs"
          >
            <img
              alt="instagram"
              src="https://img.icons8.com/?size=30&id=32309&format=png&color=ffffff"
            />
          </a>
          <a
            class="flex justify-center items-center bg-secondary hover:bg-gray-400 w-14 h-14 rounded-full transition-all ease-in-out duration-300 hover:cursor-pointer"
            href="https://linkedin.com/in/yogaprasetyapl"
          >
            <img
              alt="linkedin"
              src="https://img.icons8.com/?size=30&id=446&format=png&color=ffffff"
            />
          </a>
          <a
            class="flex justify-center items-center bg-secondary hover:bg-gray-400 w-14 h-14 rounded-full transition-all ease-in-out duration-300 hover:cursor-pointer"
            href="https://github.com/Fush1ren"
          >
            <img
              alt="github"
              src="https://img.icons8.com/?size=40&id=4Z2nCrz5iPY2&format=png&color=ffffff"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
