import VScrollLock from './classes/VScrollLock.js'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default new VScrollLock(disableBodyScroll, enableBodyScroll)
