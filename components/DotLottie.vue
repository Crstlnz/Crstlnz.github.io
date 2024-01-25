<script lang="ts" setup>
// import 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js'
import '@dotlottie/player-component'
import { useEventListener } from '@vueuse/core'

const props = withDefaults(defineProps<{
  src: string
  autoplay?: boolean
  loop?: boolean
  speed?: number
  controls?: boolean
  worker?: boolean
  width?: string
  height?: string
}>(), {
  worker: true,
  speed: 1,
})

const player = ref<any>()

useEventListener(player, 'ready', () => {
  player.value?.setSpeed(props.speed)
  if (props.autoplay) {
    player.value?.play()
  }
})
</script>

<template>
  <dotlottie-player ref="player" :src="src" background="transparent" hover :speed="speed ?? 1" :style="{ width: width || '100%', height: height || '100%' }" :loop="loop" :controls="controls" :worker="worker" />
</template>
