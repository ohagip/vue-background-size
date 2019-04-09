/**
 * VueBackgroundSize
 */

const nodeList = [];
const interval = 100;
let isResize = false;
let timer;

function cover(el) {
  const wrapElm = el.parentNode;
  const wrapWidth = wrapElm.clientWidth;
  const wrapHeight = wrapElm.clientHeight;
  const wrapRatio = wrapWidth / wrapHeight;
  const targetWidth = el.getAttribute('width');
  const targetHeight = el.getAttribute('height');
  const targetRatio = targetWidth / targetHeight;
  let width;
  let height;

  if (wrapRatio > targetRatio) {
    width = wrapWidth;
    height = width / targetRatio;
  } else {
    height = wrapHeight;
    width = height * targetRatio;
  }

  const left = width > wrapWidth ? (wrapWidth - width) / 2 : 0;
  const top = height > wrapHeight ? (wrapHeight - height) / 2 : 0;

  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function contain(el) {
  const wrapElm = el.parentNode;
  const wrapWidth = wrapElm.clientWidth;
  const wrapHeight = wrapElm.clientHeight;
  const wrapRatio = wrapWidth / wrapHeight;
  const targetWidth = el.getAttribute('width');
  const targetHeight = el.getAttribute('height');
  const targetRatio = targetWidth / targetHeight;
  let width;
  let height;
  let left;
  let top;

  if (wrapRatio > targetRatio) {
    height = wrapHeight;
    width = height * targetRatio;
    top = 0;
    left = (wrapWidth - width) / 2;
  } else {
    width = wrapWidth;
    height = width / targetRatio;
    top = (wrapHeight - height) / 2;
    left = 0;
  }

  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function backgroundSize(el, type) {
  if (type === 'contain') {
    contain(el);
  } else {
    cover(el);
  }
}

const onResize = (() => {
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      nodeList.forEach(d => { backgroundSize(d.el, d.binding.value); });
    }, interval);
  };
})();

function addNode(el, binding, vnode) {
  nodeList.push({ el, binding, vnode });
  backgroundSize(el, binding.value);
  if (isResize === false) {
    isResize = true;
    window.addEventListener('resize', onResize)
  }
}

function updateNode(el, binding, vnode) {
  const idx = nodeList.findIndex(d => {
    return d.vnode === vnode
  });
  nodeList.splice(idx, 1, { el, binding, vnode });
  backgroundSize(el, binding.value);
}

function removeNode(el, binding, vnode) {
  const idx = nodeList.findIndex(d => {
    return d.vnode === vnode
  });
  nodeList.splice(idx, 1);
  if (nodeList.length === 0) {
    window.removeEventListener('resize', onResize)
  }
}

export default class VueBackgroundSize {
  constructor() {}
}

VueBackgroundSize.install = function (Vue) {
  Vue.directive('background-size', {
    inserted(el, binding, vnode) {
      addNode(el, binding, vnode)
    },

    update(el, binding, vnode) {
      updateNode(el, binding, vnode)
    },

    unbind(el, binding, vnode) {
      removeNode(el, binding, vnode)
    }
  });
};