export default class VScrollLock {
  constructor (disableBodyScroll, enableBodyScroll) {
    this.disableBodyScroll = disableBodyScroll
    this.enableBodyScroll = enableBodyScroll
  }

  /**
   * Called when plugin is initialized
   * @param {Object} Vue The Vue instance
   * @param {Object} options Options passed to plugin
   */
  install (Vue, options) {
    Vue.directive('scroll-lock', {
      inserted: this.inserted.bind(this),
      componentUpdated: this.componentUpdated.bind(this),
      unbind: this.unbind.bind(this)
    })
  }

  /**
   * Inserted directive hook. Called when the bound element has been inserted into its parent node
   * @param {Node} el Element directive is bound to
   * @param {Object} binding Binding options
   */
  inserted (el, binding) {
    if (binding.value) {
      this.disableBodyScroll(el)
    }
  }

  /**
   * Update directive hook. called after the containing component’s VNode and the VNodes of its children have updated
   * @param {Node} el Element directive is bound to
   * @param {Object} binding Binding options
   */
  componentUpdated (el, binding) {
    if (binding.value) {
      this.disableBodyScroll(el)
    } else {
      this.enableBodyScroll(el)
    }
  }

  /**
   * Unbind directive hook
   * @param {Node} el Element directive is bound to
   */
  unbind (el) {
    this.enableBodyScroll(el)
  }
}
