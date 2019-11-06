import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default interface PluginOptions {
  disableBodyScroll?: typeof disableBodyScroll
  enableBodyScroll?: typeof enableBodyScroll
}
