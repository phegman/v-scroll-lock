# v-scroll-lock
A Vue.js directive for body scroll locking (for iOS Mobile and Tablet, Android, desktop Safari/Chrome/Firefox) without breaking scrolling of a target element (eg. modal/lightbox/flyouts/nav-menus). Built on top of [https://github.com/willmcpo/body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Overview
Preventing the body from scrolling when you have a modal/lightbox/flyout/nav-menu open on all devices can be a huge pain. This package wraps the awesome library [https://github.com/willmcpo/body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) into an easy to use Vue.js directive.

## Demo
Demo can be viewed here: [http://v-scroll-lock.peterhegman.com/](https://v-scroll-lock.peterhegman.com/)  
Source code for demo can be viewed in `src/App.vue`

## Installation

### Yarn

`yarn add v-scroll-lock`

### NPM

`npm install v-scroll-lock --save`

### Install the Vue plugin

In your main JS file first import this plugin

`import VScrollLock from 'v-scroll-lock'`

Install the plugin

`Vue.use(VScrollLock)`

## Usage

Once the plugin is installed the `v-scroll-lock` directive can be used in any of your components. When the value of the directive is `true` scrolling will be locked on all elements **except** the element the directive is bound to.

Here is an example of how you may implement it in a basic modal. See `src/components/Modal.vue` for a more in depth example.

```html
<template>
  <div class="modal" v-if="open">
    <button @click="closeModal">X</button>
    <div class="modal-content" v-scroll-lock="open">
      <p>A bunch of scrollable modal content</p>
    </div>
  </div>
</template>
```

```js
<script>
export default {
  name: 'Modal',
  data () {
    return {
      open: false
    }
  },
  methods: {
    openModal () {
      this.open = true
    },
    closeModal () {
      this.open = false
    }
  }
}
</script>
```

## Support

Please [open an issue](https://github.com/phegman/v-scroll-lock/issues/new/) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/phegman/v-scroll-lock/compare).
