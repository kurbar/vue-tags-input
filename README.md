### Forked copy
This is a forked copy of the original [vue-tags-input](https://github.com/JohMun/vue-tags-input) created by [JohMun](https://github.com/JohMun).

#### Install
NPM
```
npm install @kurbar/vue-tags-input --save
```

#### Changes
* ~~Support event.key strings in addOnKey prop. PR open [vue-tags-input#47](https://github.com/JohMun/vue-tags-input/pull/47)~~ *MERGED*
* Properly support addOnBlur. PR open [vue-tags-input#113](https://github.com/JohMun/vue-tags-input/pull/113)

# vue-tags-input

A tags input component for VueJS with autocompletion, custom validation, templating and much more

[Demo & Docs](http://www.vue-tags-input.com)

## Features

* No dependencies
* Custom validation rules
* Hooks: Before adding, Before deleting ...
* Edit tags after creation
* Fast setup
* Works with Vuex
* Small size: 34kb minified (css included) | gzipped 9kb
* Autocompletion
* Many customization options
* Own templates
* Delete tags on backspace
* Add tags on paste
* Examples & Docs

## Install

NPM
```
npm install @johmun/vue-tags-input
```

CDN
```
<script src="https://unpkg.com/@johmun/vue-tags-input/dist/vue-tags-input.js"></script>
```

## Usage

```html
<template>
  <div>
    <vue-tags-input
      v-model="tag"
      :tags="tags"
      @tags-changed="newTags => tags = newTags"
    />
  </div>
</template>
```

```javascript
<script>
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
    };
  },
};
</script>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019 Johannes Munari
