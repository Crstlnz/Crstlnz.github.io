<script lang="ts" setup>
import { useTimeoutFn } from '@vueuse/core'

const fontUrl = 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap'

useHead({
  titleTemplate: (title: any) => title ? `${title} - Crystalenz Portfolio` : 'Crystalenz, Fullstack Developer',
  meta: [
    { name: 'description', content: 'Online Portfolio of Crystalenz, Fullstack Developer' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
    { name: 'charset', content: 'utf-8' },
    { name: 'theme-color', content: '#162238' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    {
      rel: 'stylesheet',
      href: fontUrl,
      as: 'style',
    },
  ],
})

// TODO: Remove when https://github.com/vuejs/core/issues/5513 fixed
const key = ref(0)
const messages = [
  'Uncaught NotFoundError: Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.', // chromium based
  'NotFoundError: The object can not be found here.', // safari
]
if (typeof window !== 'undefined') {
  // @ts-expect-error using arbitrary window key
  if (!window.__vue5513) {
    window.addEventListener('error', (event) => {
      if (messages.includes(event.message)) {
        event.preventDefault()
        console.warn(
          'Rerendering layout because of https://github.com/vuejs/core/issues/5513',
        )
        key.value++
      }
    })
  }
  // @ts-expect-error using arbitrary window key
  window.__vue5513 = true
}

const mounted = ref(false)
const hideSplashScreen = ref(false)
const splashScreenFinish = useState('spfinish', () => false)
const coffeeIcon = 'https://res.cloudinary.com/haymzm4wp/image/upload/v1699632515/assets/svg/web/coffeevector_crop_a7ud4z.svg'
function openSplashScreen() {
  mounted.value = true
  setTimeout(() => {
    splashScreenFinish.value = true
    setTimeout(() => {
      hideSplashScreen.value = true
    }, 300) // match it with animation
  }, 700)
}

useTimeoutFn(() => {
  openSplashScreen()
}, 750)
</script>

<template>
  <div id="app" class="max-w-[2400px] mx-auto overflow-y-clip">
    <NotificationView />
    <div v-if="!hideSplashScreen" class="bg-secondary inset-0 fixed z-aboveAll flex justify-center items-center splashscreen-2 min-h-[100dvh] duration-500" :class="{ open: mounted }">
      <NuxtImg
        fit="fill"
        format="webp"
        :src="coffeeIcon"
        alt="Coffee"
        class="floating w-40 max-w-[90vw] opacity-85"
        width="160px"
        :modifiers="{
          effect: 'colorize:100', color: 'rgb:203354',
        }"
      />
    </div>
    <div v-if="!hideSplashScreen" class="bg-navy-4 inset-0 fixed z-aboveAll flex justify-center items-center splashscreen min-h-[100dvh]" :class="{ open: mounted }">
      <NuxtImg
        fit="fill"
        format="webp"
        :src="coffeeIcon"
        alt="Coffee"
        class="floating w-40 max-w-[90vw] opacity-60"
        width="160px"
        :modifiers="{
          effect: 'colorize:100', color: 'rgb:ffffff',
        }"
      />
    </div>

    <NuxtLayout>
      <NuxtLoadingIndicator
        :height="4"
      />
      <NuxtPage
        :key="key"
      />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.coffee {
  -webkit-mask-image: url(https://res.cloudinary.com/haymzm4wp/image/upload/v1691761221/assets/img/jkt48textlogo_p0hagz.png);
  mask-image: url(https://res.cloudinary.com/haymzm4wp/image/upload/v1691761221/assets/img/jkt48textlogo_p0hagz.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
}

.floating {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-top: 5px;
}

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
}

.splashscreen {
  clip-path: inset(0% 0% 0% 0%);
  transition:clip-path 1s cubic-bezier(0.25, 1, 0.5, 1);
  &.open {
    clip-path: inset(0% 0% 100% 0%);
  }
}

.splashscreen-2 {
  clip-path: inset(0% 0% 0% 0%);
  transition:clip-path 1s cubic-bezier(0.77,0,0.18,1);
  &.open {
    clip-path: inset(0% 0% 100% 0%);
  }
}
</style>
