<script lang="ts" setup>
const jkt48logUrl = ref('https://dc.crstlnz.my.id/')
const isOpen = ref(false)
</script>

<template>
  <button
    type="button"
    :class="{ open: isOpen }"
    :to="jkt48logUrl"
    target="_blank"
    class="card relative hidden-focus focus:!ring-4 text-center rounded-[4rem] col-span-3 group cursor-pointer hover:-translate-y-3 focus:-translate-y-3 transition-transform duration-500 ease-[--transition-bounce] select-none"
    @click="isOpen = !isOpen"
  >
    <img
      src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Floppy%20Disk.png"
      alt="Floppy Doodle"
      :class="{
        '!opacity-0 !invisible': isOpen,
      }"
      class="max-[1800px]:hidden absolute top-1/2 -translate-y-1/2 group-hover:top-[45%] group-focus:top-[45%] z-10 h-36 -left-12 rotate-12 transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
    >
    <img
      src="https://ik.imagekit.io/crstlnz/img/mockup/Doodle%20-%20Magnifier.png"
      alt="Magnifier Doodle"
      :class="{
        '!opacity-0 !invisible': isOpen,
      }"
      class="max-[1800px]:hidden absolute -top-6 group-hover:-top-12 group-focus:-top-12 z-10 h-40 left-[380px] rotate-[-18deg] transition-[top,opacity,visibility] invisible opacity-0 group-hover:opacity-100 group-hover:visible group-focus:visible group-focus:opacity-100 duration-[500ms]"
    >
    <div class="card-inner max-h-[450px] sm:max-h-[600px] xl:max-h-[550px] 2xl:max-h-[680px]">
      <div class="card-back bg-navy-3 h-full rounded-[3.5rem] xl:rounded-[4rem]">
        wew
      </div>
      <div class="card-front h-full bg-navy-3 py-10 px-12 md:px-16 md:py-12 shadow-md ring-1 ring-slate-700 group-hover:ring-2 group-hover:ring-slate-600 transition-all duration-500 ease-[--transition-bounce] rounded-[3.5rem] xl:rounded-[4rem] relative overflow-hidden">
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
    </div>
  </button>
</template>
