import PluginOptions from './plugin-options.interface'
import { PluginFunction, DirectiveFunction } from 'vue'
import {
  enableBodyScroll,
  disableBodyScroll,
  BodyScrollOptions,
} from 'body-scroll-lock'

export default interface VScrollLock {
  enableBodyScroll: typeof enableBodyScroll
  disableBodyScroll: typeof disableBodyScroll
  install: PluginFunction<PluginOptions>
  inserted: DirectiveFunction
  componentUpdated: DirectiveFunction
  unbind: DirectiveFunction
  bodyScrollOptions?: Partial<BodyScrollOptions>
}
