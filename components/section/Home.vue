<script lang="ts" setup>
import { useClipboard, useElementHover } from '@vueuse/core'
import { useNotifications } from '~/store/notifications'

const { copy, isSupported } = useClipboard({ legacy: true })
const { addNotif } = useNotifications()
const notifCooldown = ref(false)
const copied = ref(false)
function copyLink() {
  if (isSupported.value) {
    copy(window.location.href)
    if (!copied.value) {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    }
    if (!notifCooldown.value) {
      addNotif({
        message: 'Link copied!',
        type: 'success',
        duration: 2000,
      })
      notifCooldown.value = true
      setTimeout(() => {
        notifCooldown.value = false
      }, 2000)
    }
  }
}

const home = ref<HTMLElement | null>()
const { $gsap, $CustomEase } = useNuxtApp()
onMounted(() => {
})
const openHover = ref(false)
const hover = ref()

const { isMobile } = useDevice()
const isHoverData = useElementHover(hover)

const isHover = computed(() => {
  if (!isMobile) return isHoverData.value
  return false
})

function hoverClick() {
  openHover.value = !openHover.value
}

let ctx: gsap.Context
afterSplashScreen(() => {
  ctx = $gsap.context(() => {
    const tl = $gsap.timeline({ })
    tl.fromTo('#home-headline1', {
      x: -150,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: 'circ.out',
      duration: 0.2,
    })

    const head2 = Array.from(document.querySelectorAll('.head2')).reverse()
    tl.fromTo(head2, {
      x: -150,
      opacity: 0,
    }, {
      x: 0,
      stagger: 0.2,
      opacity: 1,
      ease: 'circ.out',
      duration: 0.2,
    })

    tl.fromTo('#home-line', {
      opacity: 1,
      clipPath: 'inset(0% 100% 0% 0%)',
    }, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.8,
      ease: 'expo.out',
    })

    tl.fromTo('.head2-bg', {
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      ease: 'circ.out',
      duration: 0.5,
    })

    $gsap.fromTo('#lottie-home', {
      opacity: 0,
    }, {
      opacity: 1,
      ease: 'expo.out',
      duration: 2.5,
    })

    const tlIcon = $gsap.timeline({})
    tlIcon.fromTo('.home-btn', {
      x: -15,
      y: 30,
      scale: 0.5,
      opacity: 0,
    }, {
      x: 0,
      y: 0,
      ease: 'elastic.out',
      opacity: 1,
      duration: 1.6,
      scale: 1,
      stagger: 0.3,
    })
  })
})

onBeforeUnmount(() => {
  if (ctx) ctx.kill()
})
</script>

<template>
  <section
    ref="home"
    data-section="home"
    class="max-h-[1200px] flex flex-col"
  >
    <div class="flex max-[1600px]:flex-col justify-center items-center flex-1 min-[1600px]:gap-40 my-40">
      <div
        id="home-wrapper"
        class="xl:aspect-[6/4.9] h-[550px] flex flex-col gap-4 md:gap-6 py-16 md:py-20 text-[2.5rem] sm:text-6xl md:text-7xl text-right 2xl:text-8xl"
      >
        <div id="home-headline1" class="font-tilt-war max-md:leading-8 opacity-0">
          Crstlnz
        </div>
        <div id="home-headline2" class="font-tilt-war flex gap-1 justify-end">
          <div class="head2 opacity-0">
            Web
          </div>
          <div ref="hover" class="head2 opacity-0  px-2 font-tilt-war" @touchend="hoverClick">
            <div class="highlight head2-bg absolute inset-0 -z-10" :class="{ open: openHover || isHover }" />
            Developer
          </div>
        </div>
        <div id="home-line" class="h-4 w-full max-w-[90vw] bg-secondary mt-2 opacity-0" />
        <div class="mt-4 xl:mt-6 flex justify-end gap-8">
          <NuxtLink target="_blank" to="https://twitter.com/crstlnz" class="home-btn rounded-full">
            <HoverUp class="flex h-10 w-10 rounded-full items-center justify-center xl:h-12 xl:w-12">
              <Icon name="logos:twitter" class="mt-1" />
            </HoverUp>
          </NuxtLink>
          <NuxtLink target="_blank" to="https://github.com/crstlnz" class="home-btn rounded-full">
            <HoverUp>
              <div class="bg-white relative rounded-full flex xl:h-12 xl:w-12 h-10 w-10 items-center justify-center">
                <Icon name="simple-icons:github" class="text-black absolute h-8 w-8 xl:w-10 xl:h-10 left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2" />
              </div>
            </HoverUp>
          </NuxtLink>
          <button
            v-if="isSupported"
            type="button"
            aria-label="Copy Link"
            target="_blank"
            class="home-btn rounded-full"
            @click="copyLink"
          >
            <HoverUp :class="{ 'opacity-50': copied }">
              <div class="relative bg-white flex p-1.5 xl:h-12 xl:w-12 h-10 w-10 rounded-full items-center justify-center">
                <Icon name="ph:link-simple" class="mb-[1px] h-8 w-8 xl:h-10 xl:w-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-slate-700 absolute inset-1" :class="{ invisible: copied }" />
                <Icon name="ic:baseline-check" class="mb-[1px] h-8 w-8 xl:h-10 xl:w-10 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 text-slate-700 absolute inset-1" :class="{ invisible: !copied }" />
              </div>
            </HoverUp>
          </button>
        </div>
      </div>
      <div id="lottie-home" class="max-[1600px]:hidden aspect-[6/4.9] h-[550px] flex opacity-0">
        <DotLottie src="https://lottie.host/d072112a-535d-4356-bfad-859d1c663ee8/nZrOpJcFnb.lottie" autoplay :speed="0.8" width="100%" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.highlight {
  @apply bg-gradient-to-r from-navy-5 from-50% to-secondary to-50%;
  background-size: 200% 100%;
  // background-image: linear-gradient(to right, red 50%, black 50%);
  -webkit-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: background-position 1s;

  // &:hover {
  //   background-position: -100% 0%;
  // }
  &.open {
    background-position: -100% 0%;
  }
}

.home-btn {
  opacity: 0;
}
</style>
