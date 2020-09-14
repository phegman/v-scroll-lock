import { VueConstructor } from 'vue';
import VScrollLockInterface from './interfaces/v-scroll-lock.interface';
declare global {
    interface Window {
        Vue?: VueConstructor;
    }
}
declare const VScrollLock: VScrollLockInterface;
export default VScrollLock;
