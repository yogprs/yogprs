<script setup lang="ts"></script>
<template>
  <div class="text-black">
    <div
      class="w-full h-screen flex flex-col justify-center z-[45] px-10 md:px-12"
    >
      <div class="max-h-[100dvh]">
        <div
          class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden"
        >
          <div
            class="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start opacity-[1] transform-none"
          >
            <span class="uppercase text-xl mb-3 font-normal tracking-[.5rem]"
              >Yoga Prasetya
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
                class="mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
              >
                <a target="_blank" rel="noopener noreferrer" download>
                  Download CV
                </a>
              </button>
              <button
                class="mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-transparent hover:bg-secondary border-black hover:border-secondary border-2 text-secondary hover:text-white box-border hover:cursor-pointer"
              >
                <a target="_blank" rel="noopener noreferrer" download>
                  Contact Me
                </a>
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
      class="relative md:h-screen w-full gap-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <div
        class="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[4%] md:-translate-y-16"
      >
        <div
          class="rounded-sm h-[400px] md:h-[500px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 opacity-[1] transform-none"
        >
          <img
            alt="yogprs"
            class="object-cover absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
            src="../assets/img/yopras.jpg"
          />
        </div>
      </div>
      <div
        class="z-10 w-full absolute md:w-auto md:left-[5%] top-[65%] md:top-1/3 col-span-2 flex flex-col justify-center items-center md:items-start text-start px-10 py-8 md:py-5"
      >
        <span
          class="bg-transparent bg-opacity-50 px-3 md:px-0 text-4xl md:text-6xl font-bold"
        >
          About Me
        </span>
        <span class="text-xl mt-4 tracking-wider leading-[1.7rem] mb-5">
          A brief introduction about myself and my skills.
        </span>
        <button
          class="mr-3 rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-secondary hover:bg-transparent border-transparent hover:border-black border-2 text-white hover:text-secondary box-border hover:cursor-pointer"
        >
          <a target="_blank" rel="noopener noreferrer" download> Learn More </a>
        </button>
      </div>
    </div>
  </div>
</template>
