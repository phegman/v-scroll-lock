import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';
export default interface PluginOptions {
    disableBodyScroll?: typeof disableBodyScroll;
    enableBodyScroll?: typeof enableBodyScroll;
    bodyScrollOptions?: Partial<BodyScrollOptions>;
}
