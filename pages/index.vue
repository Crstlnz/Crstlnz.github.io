<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints, useEventListener, useScroll } from '@vueuse/core'

// definePageMeta({
//   // pageTransition: {
//   //   name: 'page',
//   //   mode: 'out-in',
//   //   onEnter: () => {
//   //
//   //   },
//   // },
// })

const wrapper = ref<HTMLElement>()
const wrapperChild = ref<HTMLElement>()
const { greaterOrEqual } = useBreakpoints(breakpointsTailwind)
const xl = greaterOrEqual('xl')

const size = ref<{ width: number | null, height: number | null }>({
  width: null,
  height: null,
})

function calculateWraperSize(el: HTMLElement) {
  size.value = {
    width: null,
    height: null,
  }
  nextTick(() => {
    if (xl.value) {
      const rect = el.getBoundingClientRect()
      size.value = {
        width: rect.width,
        height: rect.height,
      }
      if (wrapperChild.value) {
        wrapperChild.value.style.width = `${rect.width}px`
        wrapperChild.value.style.height = `${rect.height}px`
      }
    }
    else {
      size.value = {
        width: null,
        height: null,
      }
    }
  })
}

onMounted(() => {
  if (wrapper.value) {
    calculateWraperSize(wrapper.value)
  }
})

useEventListener(window, 'resize', () => {
  requestAnimationFrame(() => {
    if (wrapper.value) {
      calculateWraperSize(wrapper.value)
    }
  })
})

useEventListener(window, 'scroll', () => {
  detectSection()
})

const currentSection = ref<HTMLElement>()
const sectionId = computed(() => {
  return currentSection.value?.getAttribute('data-section')
})
const sections = ref<HTMLElement[]>([])
function detectSection() {
  currentSection.value = sections.value.find((sec) => {
    const y = window.scrollY
    const offset = sec.offsetTop - window.innerHeight / 2
    const height = sec.offsetHeight
    if (y >= offset && y < offset + height) {
      return sec
    }
    return null
  })
}

onMounted(() => {
  nextTick(() => {
    sections.value = [...document.querySelectorAll('section')]
  })
})

const { y } = useScroll(window)
const isTop = ref(false)
watch(y, (val) => {
  isTop.value = val > window.innerHeight / 2
})

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function menuClick(menu: Menu) {
  if (menu.url !== '#') {
    const el = document.getElementById(menu.id)
    smoothScroll(el || 0)
  }
  else {
    smoothScroll(0)
  }
}

function onScroll(y: number) {
  window.scrollTo({ top: y, behavior: 'instant' })
}

const { isMobile } = useDevice()
</script>

<template>
  <div id="main-app" class="flex justify-center xl:min-h-[100vh] flex-col xl:flex-row">
    <Teleport v-if="!isMobile" to="body">
      <ScrollBar
        :use-window="true"
        @scroll="onScroll"
      />
    </Teleport>
    <SinglePageNav class="fixed top-0 !left-0" :currect-section="sectionId" @menu-click="menuClick" />

    <main id="content" class="bg-navy-2 w-full">
      <Transition name="popup">
        <button v-if="isTop" type="button" class="z-aboveNav w-10 h-10 bg-navy-3 border-white/50 border-2 rounded-full fixed bottom-10 right-10 hover:bg-navy-5 transition-[background-color,transform] hover:scale-110 duration-200 ease-linear" @click="scrollTop">
          <Icon name="heroicons:arrow-long-up-16-solid" size="1.5rem" />
        </button>
      </Transition>
      <SectionHome />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </main>
  </div>
</template>
