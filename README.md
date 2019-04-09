# vue-background-size  
cssのbackground-size: contain, coverの挙動をdom（img, videoなど）で実現するカスタムディレクティブ

[DEMO](https://ohagip.github.io/vue-background-size/)

## Install
```
npm install git+https://github.com/ohagip/vue-background-size.git
```
or  
`./src/vue-background-size.js`をコピペ

## Usage
```js
import VueBackgroundSize from 'vue-background-size'
Vue.use(VueBackgroundSize)
```

```vue
<img src="" width="xxx" height="xx" v-background-size>
<img src="" width="xxx" height="xx" v-background-size="type">
```

## Documentation
| Property | Type | Description | Default |
|:--------:|:----:|-------------|---------|
| type | string | `cover` or `contain` | `cover` |

---
## Vue CLI npm script

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```