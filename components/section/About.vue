<!-- eslint-disable import/no-named-as-default -->
<script lang="ts" setup>
import type gsap from 'gsap'
import { NuxtLink } from '#components'
import myLang from '~~/assets/json/myLang.json'

const main = ref()
const { $gsap } = useNuxtApp()
const { width } = useElementStyle(main)
let ctx: gsap.Context
onMounted(() => {
  ctx = $gsap.context(() => {
    $gsap.timeline({
      scrollTrigger: {
        trigger: '.lang-container',
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'restart none none reset',
      },
    })
      // .from('.skill-box', { y: 100, stagger: 0.15, opacity: 0, duration: 0.45, delay: 0.25 })
      .from('.lang-list-animate', { x: 50, stagger: 0.1, opacity: 0, duration: 1, delay: 0, ease: 'expo.out' })
  }, main.value) // <- Scope!
})

onBeforeUnmount(() => {
  if (ctx)ctx.kill()
})
</script>

<template>
  <section
    id="about"
    ref="main"
    data-section="about"
    class="bg-gray-900 flex flex-col w-full px-6 md:px-8 relative"
  >
    <ScrollButton to="#about" icon="mingcute:arrows-down-fill" icon-class="text-white" class="bg-secondary" />
    <div class="pt-24">
      <div class="max-w-[87rem] mx-auto flex max-xl:flex-col gap-20 flex-1 mt-10">
        <div class="flex-1 bg-navy-1 rounded-[2rem] p-10 group cursor-pointer flex flex-col gap-8 ring-2 ring-transparent hover:-translate-y-2 ease-[--transition-bounce] hover:ring-white/50 transition-all duration-500">
          <div class="flex gap-8">
            <div class="bg-black/20 w-40 aspect-square relative">
              <img
                src="https://avatars.githubusercontent.com/u/52141479"
                alt="Github Profile Picture"
                class="bg-white/50 w-40 aspect-square absolute -translate-x-5 -translate-y-10 rotate-[-12deg] ease-[--transition-bounce] scale-105 shadow-[10px_50px_65px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:shadow-none group-hover:rotate-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 object-cover"
              >
            </div>
            <div class="flex-1">
              <!-- <div class="text-2xl [&>b]:text-red-500">
                Hello, I'm <b>Kelvin Geraldi</b><br>
                I'm a <b>full-stack web developer</b>
              </div> -->
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="group tech-stacks relative">
            <div
              class="skill-title container top-0 z-20 mx-auto flex items-end gap-3 pb-10 text-2xl font-bold md:text-4xl cursor-pointer"
            >
              <div class="relative w-[3rem] h-[3rem] card">
                <div class="card-inner">
                  <img :src="$imagekitIcon('https://ik.imagekit.io/crstlnz/img/icons_javascript.png?updatedAt=1706206130202')" alt="" class="absolute inset-0 card-front">
                  <img :src="$imagekitIcon('https://ik.imagekit.io/crstlnz/img/icons_typescript.png?updatedAt=1706206130201')" alt="" class="absolute inset-0 card-back">
                </div>
              </div>
              <span class="text-slate-300 group-hover:text-slate-100 transition-colors duration-700">My Tech Stacks</span>
            </div>
            <div class="relative text-slate-300 group-hover:text-slate-100 cursor-pointer container mx-auto flex-1 text-xl p-5 md:p-6 rounded-2xl bg-navy-1 ring-1 group-hover:ring-2 group-hover:ring-white/50 ring-white/10 group-hover:-translate-y-1 transition-[transform,box-shadow,color] ease-out duration-700">
              With 4 years of experience for web development, I have very good skills for full-stack projects using JavaScript or TypeScript with Vue and Nuxt framework. I often use Vue, but I also explored React JS to gain flexibility in adapting to various project needs. I'm also actively expanding my skillset, having explored mobile development with Flutter and Jetpack Compose for Android.
            </div>
          </div>
          <div class="lang-container container mx-auto mt-10 flex flex-wrap gap-3">
            <component
              :is="lang.img ? NuxtLink : 'div'"
              v-for="lang in myLang"
              :key="lang.title"
              :to="lang.resource"
              target="_blank"
              class="lang-list-animate rounded-md bg-blue-200/10 px-2 py-1.5 text-sm transition-[color,width] hover:bg-blue-300/40 text-slate-300 hover:text-slate-100"
            >
              {{ lang.title }}
            </component>
          </div>
        </div>
      </div>
      <RunningIcon
        class="py-12 md:py-16 w-full"
        :speed="width * 0.03 / 100"
        :enable-hover="true"
        :min-gap="{
          all: 30,
          sm: 60,
          md: 60,
          lg: 70,
          xl: 75,
          xxl: 75,
        }"
        :sizes="{
          all: 50,
          sm: 80,
          md: 80,
          xl: 80,
        }"
        :data="myLang"
      />
    </div>
  </section>
</template>

<style lang="scss">
.tech-stacks {
  &:hover {
    .card-inner {
        transform: rotateY(180deg);
    }
  }
  .card {
    perspective: 1200px;
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 1s;
      transform-style: preserve-3d;
      .card-front {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .card-back {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: rotateY(180deg);
      }
    }
  }
}
</style>
