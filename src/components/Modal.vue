<template>
  <div class="modal-wrap">
    <button @click="openModal" class="open-modal">Open Modal</button
    ><!-- /.open-modal -->
    <transition name="fade" v-on:enter="enableFocusTrap">
      <div
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        aria-modal="true"
        v-show="open"
        class="modal"
        ref="modal"
      >
        <button
          @click="closeModal"
          class="close-modal"
          aria-label="Close Modal"
        >
          <img
            src="../assets/close-icon.svg"
            alt=""
            aria-hidden="true"
          /></button
        ><!-- /.close-modal -->
        <div v-scroll-lock="open" class="content-wrap">
          <h1 id="modal-title" class="modal-title">This is a modal</h1>
          <!-- /.modal-title -->
          <div id="modal-description" class="modal-title">
            <h4>The modal can scroll, but the body can't</h4>
            <p>{{ loremIpsum }}</p>
          </div>
          <!-- /#modal-description.modal-title -->
        </div>
        <!-- /.content-wrap -->
      </div>
      <!-- /.modal -->
    </transition>
  </div>
  <!-- /.modal-wrap -->
</template>

<script lang="ts">
import Vue from 'vue'
import loremIpsum from '../lorem-ipsum'
import Component from 'vue-class-component'
import createFocusTrap, { FocusTrap } from 'focus-trap'

@Component
export default class Modal extends Vue {
  private loremIpsum = loremIpsum
  private focusTrap: FocusTrap | null = null

  open = false

  openModal() {
    this.open = true
  }

  closeModal() {
    if (this.focusTrap) {
      this.focusTrap.deactivate()
    }
    this.open = false
  }

  enableFocusTrap() {
    if (this.focusTrap) {
      this.focusTrap.activate()
    }
  }

  handleEscapeKeyDown(event: KeyboardEvent) {
    if (this.open && event.keyCode === 27) {
      this.closeModal()
    }
  }

  mounted() {
    document.addEventListener('keydown', this.handleEscapeKeyDown)

    this.focusTrap = createFocusTrap(this.$refs.modal as HTMLElement)
  }

  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscapeKeyDown)
  }
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: #fff;
  border-radius: 4px;
  bottom: 15px;
  box-shadow: 0 0 15px rgba(#1e2f43, 0.15);
  left: 15px;
  padding: 15px;
  position: fixed;
  right: 15px;
  top: 15px;

  @media screen and (min-width: 992px) {
    bottom: auto;
    height: 500px;
    left: 50%;
    max-height: 100%;
    padding: 30px;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
  }
}

.close-modal {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  background-color: #00a3ff;
  color: #fff;

  @media screen and (min-width: 992px) {
    right: 20px;
    top: 20px;
  }

  img {
    display: block;
    height: 20px;
    width: 20px;
  }
}

.content-wrap {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow: auto;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.open-modal {
  background-color: #00a3ff;
  border-radius: 40px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: sans-serif;
  font-size: 16px;
  margin-top: 15px;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

  &:hover {
    background-color: darken(#00a3ff, 10%);
  }
}
</style>
