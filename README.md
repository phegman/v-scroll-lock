[![npm](https://img.shields.io/npm/dw/localeval.svg)](https://www.npmjs.com/package/v-scroll-lock)
[![Build Status](https://travis-ci.org/phegman/v-scroll-lock.svg?branch=master)](https://travis-ci.org/phegman/v-scroll-lock)

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

Preventing the body from scrolling when you have a modal/lightbox/flyout/nav-menu open on all devices can be a huge pain. This package wraps [https://github.com/willmcpo/body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) into an easy to use Vue.js directive.

## Demo

Demo can be viewed here: [http://v-scroll-lock.peterhegman.com/](https://v-scroll-lock.peterhegman.com/)  
Source code for demo can be viewed in `src/Demo.vue`

## Installation

### Module Bundler (Webpack, Rollup, etc)

#### Yarn

```bash
yarn add v-scroll-lock
```

#### NPM

```bash
npm install v-scroll-lock --save
```

#### Install the Directive

```js
import VScrollLock from 'v-scroll-lock'

Vue.use(VScrollLock)
```

### [Vue CDN](https://vuejs.org/v2/guide/#Getting-Started)

Download latest `v-scroll-lock.min.js` from [https://github.com/phegman/v-scroll-lock/releases](https://github.com/phegman/v-scroll-lock/releases)

Include using a `<script>` tag

```html
<script src="v-scroll-lock.min.js"></script>
```

## Usage

Once the plugin is installed the `v-scroll-lock` directive can be used in any of your components. When the value of the directive is `true` scrolling will be locked on all elements **except** the element the directive is bound to.

Here is an example of how you may implement it in a basic modal. Please note the below example is to demonstrate usage of the `v-scroll-lock` directive and is not a complete implementation of a modal. See `src/components/Modal.vue` for a more in depth example.

```vue
<template>
  <div class="modal" v-if="open">
    <button @click="closeModal">X</button>
    <div class="modal-content" v-scroll-lock="open">
      <p>A bunch of scrollable modal content</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openModal() {
      this.open = true
    },
    closeModal() {
      this.open = false
    },
  },
}
</script>
```

### [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock#options) options

Options can be passed when installing the directive:

```js
import VScrollLock from 'v-scroll-lock'

Vue.use(VScrollLock, {
  bodyScrollOptions: {
    reserveScrollBarGap: true,
  },
})
```

See [https://github.com/willmcpo/body-scroll-lock#options](https://github.com/willmcpo/body-scroll-lock#options) for full list of options.

### Providing Your Own Version of [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)

To make using this directive easier [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) is included in the package. In the case that you would like to use a version different than the packaged version this can be specified in the plugin options. Also note that `v-scroll-lock-no-dep.esm.js` should be imported to prevent duplicate code in your bundle. See example below:

```js
import VScrollLock from 'v-scroll-lock/dist/v-scroll-lock-no-dep.esm'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

Vue.use(VScrollLock, {
  enableBodyScroll,
  disableBodyScroll,
})
```

## Support

Please [open an issue](https://github.com/phegman/v-scroll-lock/issues/new/) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/phegman/v-scroll-lock/compare).
