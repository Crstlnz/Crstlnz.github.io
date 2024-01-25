<script lang="ts" setup>
const jkt48logUrl = ref('https://dc.crstlnz.my.id/')
const gameUrl = ref('https://dc.crstlnz.my.id/sorter')
const chatUrl = ref('/chat')
const multiViewerUrl = ref('https://dc.crstlnz.my.id/multi?mockup=1')
</script>

<template>
  <section
    id="projects"
    data-section="projects"
    data-color="bg-white"
    class="projects md:px-4 xl:px-10 bg-language flex snap-start flex-col items-center py-14 text-white md:py-20 relative"
  >
    <ScrollButton to="#projects" icon="mingcute:arrows-down-fill" icon-class="text-white" class="bg-secondary" />
    <div class="flex items-end gap-3 text-5xl md:text-7xl xl:text-8xl pt-4 my-14 md:my-16 2xl:text-9xl font-bold">
      <span class="font-simplify">My Projects</span>
    </div>
    <div class="text-slate-400 text-lg md:text-2xl font-semibold mb-6 md:mb-10 text-center">
      Here are some examples of my work
    </div>
    <div class="space-y-10 xl:space-y-28 items-center justify-center mt-10 w-full xl:px-14">
      <div class="mx-3 md:mx-5 xl:mx-8 flex flex-col gap-10 xl:gap-28 xl:grid xl:grid-cols-5">
        <NuxtLink :to="jkt48logUrl" target="_blank" class="relative hidden-focus focus:!ring-4 text-center rounded-[4rem] col-span-3 group cursor-pointer hover:-translate-y-3 focus:-translate-y-3 transition-transform duration-500 ease-[--transition-bounce] select-none">
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Floppy%20Disk.png"
            alt="Floppy Doodle"
            class="max-[1800px]:hidden absolute top-1/2 -translate-y-1/2 group-hover:top-[45%] group-focus:top-[45%] z-10 h-36 -left-12 rotate-12 transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Magnifier.png"
            alt="Magnifier Doodle"
            class="max-[1800px]:hidden absolute -top-6 group-hover:-top-12 group-focus:-top-12 z-10 h-40 left-[380px] rotate-[-18deg] transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <div class="bg-navy-3 py-10 px-12 md:px-16 md:py-12 max-h-[450px] sm:max-h-[600px] xl:max-h-[550px] 2xl:max-h-[680px] shadow-md ring-1 ring-slate-700 group-hover:ring-2 group-hover:ring-slate-600 transition-all duration-500 ease-[--transition-bounce] rounded-[3.5rem] xl:rounded-[4rem] relative overflow-hidden">
            <div class="flex flex-col gap-3 items-end">
              <div class="font-semibold text-lg xl:text-xl opacity-70">
                Website
              </div>
              <div class="font-simplify text-3xl xl:text-5xl">
                JKT48 Log
              </div>
            </div>
            <div class="mt-8 md:mt-10 xl:mt-14 xl:mx-16 relative overflow-visible h-[900px] transition-all duration-[800ms] ease-[--transition-bounce] group-focus:translate-y-5 group-hover:translate-y-5">
              <div class="absolute top-0 left-0 w-[600px] md:w-[900px] 2xl:w-[1300px]">
                <img src="https://ik.imagekit.io/crstlnz/img/mockup/home.png" class="object-cover">
              </div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink :to="gameUrl" target="_blank" class="relative hidden-focus focus:!ring-4 text-center rounded-[4rem] col-span-1 xl:col-span-2 group cursor-pointer hover:-translate-y-3 focus:-translate-y-3 transition-transform duration-500 ease-[--transition-bounce] select-none">
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Gamepad.png"
            alt="Gamepad Doodle"
            class="max-[1800px]:hidden absolute -top-8 group-hover:-top-14 group-focus:-top-14 rotate-12 z-10 h-36 left-16 2xl:left-28 transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <div class="bg-navy-3 py-10 px-12 md:px-16 md:py-12 max-h-[450px] sm:max-h-[600px] xl:max-h-[550px] 2xl:max-h-[680px] shadow-md ring-1 ring-slate-700 group-hover:ring-2 group-hover:ring-slate-600 transition-all duration-500 ease-[--transition-bounce] rounded-[3.5rem] xl:rounded-[4rem] relative overflow-hidden">
            <div class="flex flex-col gap-3 items-end">
              <div class="font-semibold text-lg xl:text-xl opacity-70">
                Game
              </div>
              <div class="font-simplify text-3xl xl:text-5xl">
                Sorter
              </div>
            </div>
            <div class="mt-8 md:mt-10 xl:mt-14 relative flex overflow-visible h-[900px] transition-all duration-[800ms] ease-[--transition-bounce] group-focus:translate-y-5 group-hover:translate-y-5">
              <div class="absolute top-0 max-xl:left-1/2 left-0 max-xl:-translate-x-1/2 aspect-[9/19.5] 2xl:px-10 min-h-[550px]">
                <img src="https://ik.imagekit.io/crstlnz/img/mockup/phone_oshi_sorter_2.png" class="object-cover">
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="mx-3 md:mx-5 xl:mx-8 flex flex-col gap-10 xl:gap-28 xl:grid xl:grid-cols-5">
        <NuxtLink :to="chatUrl" target="_blank" class="relative hidden-focus focus:!ring-4 text-center rounded-[4rem] col-span-1 xl:col-span-2 group cursor-pointer hover:-translate-y-3 focus:-translate-y-3 transition-transform duration-500 ease-[--transition-bounce] select-none">
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Gamepad.png"
            alt="Gamepad Doodle"
            class="max-[1800px]:hidden absolute -top-8 group-hover:-top-14 group-focus:-top-14 rotate-12 z-10 h-36 left-28 transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <div class="bg-navy-3 py-10 px-12 md:px-16 md:py-12 max-h-[450px] sm:max-h-[600px] xl:max-h-[550px] 2xl:max-h-[680px] shadow-md ring-1 ring-slate-700 group-hover:ring-2 group-hover:ring-slate-600 transition-all duration-500 ease-[--transition-bounce] rounded-[3.5rem] xl:rounded-[4rem] relative overflow-hidden">
            <div class="flex flex-col gap-3 items-end">
              <div class="font-semibold text-lg xl:text-xl opacity-70">
                Website
              </div>
              <div class="font-simplify text-3xl xl:text-5xl">
                P2P Chat
              </div>
            </div>
            <div class="mt-8 md:mt-10 xl:mt-14 relative flex overflow-visible h-[900px] transition-all duration-[800ms] ease-[--transition-bounce] group-focus:translate-y-5 group-hover:translate-y-5">
              <div class="absolute top-0 max-xl:left-1/2 left-0 max-xl:-translate-x-1/2 aspect-[9/19.5] 2xl:px-10 min-h-[550px]">
                <img src="https://ik.imagekit.io/crstlnz/img/mockup/phone_chat.png?updatedAt=1706206208141" class="object-cover">
              </div>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink :to="multiViewerUrl" target="_blank" class="relative hidden-focus focus:!ring-4 text-center rounded-[4rem] col-span-3 group cursor-pointer hover:-translate-y-3 focus:-translate-y-3 transition-transform duration-500 ease-[--transition-bounce] select-none">
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Action.png"
            alt="Clapperboard Doodle"
            class="max-[1800px]:hidden absolute top-1/2 -translate-y-1/2 group-hover:top-[45%] group-focus:top-[45%] z-10 h-44 -left-20 rotate-[-5deg] transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <img
            src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Video.png"
            alt="Video Camera Doodle"
            class="max-[1800px]:hidden absolute -top-6 group-hover:-top-12 group-focus:-top-12 z-10 h-36 -scale-x-100 left-[300px] rotate-[18deg] transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
          >
          <div class="bg-navy-3 py-10 px-12 md:px-16 md:py-12 max-h-[450px] sm:max-h-[600px] xl:max-h-[550px] 2xl:max-h-[680px] shadow-md ring-1 ring-slate-700 group-hover:ring-2 group-hover:ring-slate-600 transition-all duration-500 ease-[--transition-bounce] rounded-[3.5rem] xl:rounded-[4rem] relative overflow-hidden">
            <div class="flex flex-col gap-3 items-end">
              <div class="font-semibold text-lg xl:text-xl opacity-70">
                Tools
              </div>
              <div class="font-simplify text-3xl xl:text-5xl">
                Multi Viewer
              </div>
            </div>
            <div class="mt-8 md:mt-10 xl:mt-14 xl:mx-8 relative overflow-visible h-[900px] transition-all duration-[800ms] ease-[--transition-bounce] group-focus:translate-y-5 group-hover:translate-y-5">
              <div class="absolute top-0 left-0 w-[600px] md:w-[900px] xl:w-[1300px]">
                <img src="https://ik.imagekit.io/crstlnz/img/mockup/multi_viewer.png" class="object-cover">
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
