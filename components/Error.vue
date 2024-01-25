<script lang="ts" setup>
import '@lottiefiles/lottie-player'
import anime from 'animejs/lib/anime.es.js'

const props = defineProps({
  error: {
    type: Object,
    default() {
      return {}
    },
  },
})
const { t } = useI18n()
const id = `error.${props.error?.statusCode}`
const msg = t(id)
const message = msg !== id ? msg : 'An error occured!'
const messageNode = ref<HTMLElement | null>(null)
interface ErrorMessage {
  message: string
  code: number
  lotie: string
  class: string
  langKey: string
}

function getError(error: any): ErrorMessage {
  switch (error?.statusCode) {
    case 404 :
      return {
        message: 'Page not found!',
        code: 404,
        class: '',
        lotie: '/json/404.json',
        langKey: 'error.404',
      }
    default:
      return {
        message: 'An error occured!',
        code: 520,
        class: '',
        lotie: '/json/error.json',
        langKey: 'error.520',
      }
  }
}

const errorData = getError(props.error)
onMounted(() => {
  // if (messageNode.value) { messageNode.value.innerHTML = messageNode.value.textContent?.replace(/\S/g, '<span class=\'letter\'>$&</span>') ?? '' }
  if (messageNode.value) {
    const texts = messageNode.value.innerHTML.split(' ')
    messageNode.value.innerHTML = texts.map((i) => {
      return `<div>${i.split('').map(t => `<span class='letter inline-block'>${t}</span>`).join('')}</div>`
    }).join('<span class=\'letter\'> </span>')
  }
  anime({
    duration: 1000,
    targets: '.letter',
    loop: true,
    translateY: [0, -10, 5, 0],
    easing: 'easeOutSine',
    endDelay: 1000,
    delay: anime.stagger(70),
  })
})
</script>

<template>
  <div class="mx-10 flex h-[100vh] items-center justify-center">
    <div class="mb-32 space-y-12">
      <ClientOnly>
        <template #placeholder>
          <div class="m-auto aspect-[45/35] max-w-[85%]" />
        </template>
        <lottie-player
          class="m-auto aspect-[45/35] max-w-[85%]"
          autoplay
          loop
          :src="errorData.lotie"
        />
      </ClientOnly>
      <div ref="messageNode" :class="error.statusCode === 404 ? 'text-[rgb(58,87,232)]' : 'text-[#0d70c5]'" class="flex flex-wrap justify-center gap-2 pb-10 text-center text-4xl font-semibold xl:text-5xl [&>div]:inline-block">
        {{ message }}
      </div>
      <div class="text-center">
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
