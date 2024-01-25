<script lang="ts" setup>
import { useAnimate, useElementHover, useEventListener, useRafFn, useScroll, useWindowFocus, useWindowSize } from '@vueuse/core'

const props = withDefaults(defineProps<{
  data: {
    img: string
    title: string
    resource?: string
  }[]
  enableLink?: boolean
  enableHover?: boolean
  speed?: number
  sizes?: {
    all: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
  }
  minGap?: {
    all: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
  }
  offset?: number // extend left and right for hide the icon before recycle
}>(), {
  enableHover: false,
  enableLink: true,
  sizes: () => {
    return {
      all: 128,
    }
  },
  speed: 4.5,
  minGap: () => {
    return {
      all: 150,
    }
  },
  offset: 200,
})

const { greaterOrEqual } = useResponsive()
const sm = greaterOrEqual('sm')
const md = greaterOrEqual('md')
const lg = greaterOrEqual('lg')
const xl = greaterOrEqual('xl')
const xl2 = greaterOrEqual('2xl')

const icons = ref<HTMLElement[]>([])
const scroller = ref<HTMLElement | null>()
const container = ref<HTMLElement | null>()

function getSize(): number {
  if (props.sizes.xxl && xl2.value) {
    return props.sizes.xxl
  }
  else if (props.sizes.xl && xl.value) {
    return props.sizes.xl
  }
  else if (props.sizes.lg && lg.value) {
    return props.sizes.lg
  }
  else if (props.sizes.md && md.value) {
    return props.sizes.md
  }
  else if (props.sizes.sm && sm.value) {
    return props.sizes.sm
  }
  else {
    return props.sizes.all
  }
}

// function getGap(): number {
//   if (props.minGap.xxl && xl2.value) {
//     return props.minGap.xxl
//   }
//   else if (props.minGap.xl && xl.value) {
//     return props.minGap.xl
//   }
//   else if (props.minGap.lg && lg.value) {
//     return props.minGap.lg
//   }
//   else if (props.minGap.md && md.value) {
//     return props.minGap.md
//   }
//   else if (props.minGap.sm && sm.value) {
//     return props.minGap.sm
//   }
//   else {
//     return props.minGap.all
//   }
// }

const gap = computed(() => {
  if (props.minGap.xxl && xl2.value) {
    return props.minGap.xxl
  }
  else if (props.minGap.xl && xl.value) {
    return props.minGap.xl
  }
  else if (props.minGap.lg && lg.value) {
    return props.minGap.lg
  }
  else if (props.minGap.md && md.value) {
    return props.minGap.md
  }
  else if (props.minGap.sm && sm.value) {
    return props.minGap.sm
  }
  else {
    return props.minGap.all
  }
})

const { $gsap } = useNuxtApp()
let ctx: gsap.Context
let animation: gsap.core.Tween
onMounted(() => {
  ctx = $gsap.context(() => {
    animation = $gsap.fromTo('#icon-slider', {
      xPercent: 0,
    }, {
      duration: 60,
      xPercent: -50,
      repeat: -1,
      ease: 'none',
    })
  })
})

// function pause() {
//   if (animation) animation.pause()
// }

// function resume() {
//   if (animation) animation.resume()
// }

// const isFocus = useWindowFocus()

// watch(isFocus, (focus) => {
//   if (focus) {
//     resume()
//   }
//   else {
//     pause()
//   }
// })

onBeforeUnmount(() => {
  if (ctx) ctx.kill()
})
// useAnimate(container, keyframes, { duration: 60000, iterations: Number.POSITIVE_INFINITY })
</script>

<template>
  <div>
    <div ref="scroller" class="gradient relative overflow-x-hidden transition-opacity duration-300 max-w-[100vw] mx-auto" :style="{ height: `${getSize() + 10}px` }">
      <div id="icon-slider" ref="container" class="absolute flex justify-around" :style="{ gap: `${gap}px`, paddingRight: `${gap / 2}px`, paddingLeft: `${gap / 2}px` }">
        <component
          :is="icon.resource && enableLink ? 'a' : 'div'"
          v-for="icon in [...data, ...data]"
          ref="icons"
          :key="icon.img"
          target="_blank"
          :href="enableLink ? icon.resource : undefined"
          :title="icon.title"
          :style="{
            width: `${getSize()}px`,
            height: `${getSize()}px`,
          }"
          :class="{
            'cursor-pointer': enableLink && icon.resource,
            'transition-transform duration-300 hover:scale-90': enableHover,
          }"
          class="pointer-events-auto shrink-0 text-center text-7xl leading-[8rem] text-slate-600 rounded-md mt-[5px]"
        >
          <img :src="$imagekitIcon(icon.img)" :alt="icon.title" class="w-full h-full object-contain">
        </component>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gradient{
  mask-image: -webkit-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.4), rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0.4),rgba(0,0,0,0));
  -webkit-mask-image: -webkit-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.4), rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,0.4),rgba(0,0,0,0));
}

@keyframes slide-left {
  from {transform: translateX(0);}
  to {transform: translateX(-50%);}
}

@keyframes slide-right {
  from {transform: translateX(0);}
  to {transform: translateX(50%);}
}

// #icon-slider{
//   animation: slide-left 60s infinite linear;
// }
</style>
