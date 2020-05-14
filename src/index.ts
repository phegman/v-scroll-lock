import { VueConstructor } from 'vue'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import VScrollLockInterface from './interfaces/v-scroll-lock.interface'

declare global {
  interface Window {
    Vue?: VueConstructor
  }
}

const VScrollLock: VScrollLockInterface = {
  enableBodyScroll,
  disableBodyScroll,
  install(Vue, options) {
    if (options) {
      const {
        enableBodyScroll: enableBodyScrollOption,
        disableBodyScroll: disableBodyScrollOption,
        bodyScrollOptions,
      } = options

      if (enableBodyScrollOption) {
        this.enableBodyScroll = enableBodyScrollOption
      }

      if (disableBodyScrollOption) {
        this.disableBodyScroll = disableBodyScrollOption
      }

      if (bodyScrollOptions) {
        this.bodyScrollOptions = bodyScrollOptions
      }
    }
    Vue.directive('scroll-lock', {
      inserted: this.inserted.bind(this),
      componentUpdated: this.componentUpdated.bind(this),
      unbind: this.unbind.bind(this),
    })
  },
  inserted(el, binding) {
    if (binding.value) {
      this.disableBodyScroll(el, this.bodyScrollOptions)
    }
  },
  componentUpdated(el, binding) {
    if (binding.value) {
      this.disableBodyScroll(el, this.bodyScrollOptions)
    } else {
      this.enableBodyScroll(el)
    }
  },
  unbind(el) {
    this.enableBodyScroll(el)
  },
}

// Auto-install when vue is found (eg. in browser via <script> tag)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VScrollLock)
}

export default VScrollLock
