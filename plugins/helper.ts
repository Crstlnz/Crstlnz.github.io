export default defineNuxtPlugin(() => {
  return {
    provide: {
      cloudinaryIcon: (url: string, w = 300, h = 300) => {
        if (url?.includes('res.cloudinary.com')) {
          const d = url.split('upload/')
          return d.join(`upload/c_fit,h_${h},w_${w}/`)
        }
        return url
      },
      imagekitIcon: (url: string, w = 300, h = 300) => {
        if (url?.includes('ik.imagekit.io/crstlnz/')) {
          const d = url.split('ik.imagekit.io/crstlnz/')
          return d.join(`ik.imagekit.io/crstlnz/tr:w-${w},h-${h}/`)
        }
        return url
      },
    },
  }
})
