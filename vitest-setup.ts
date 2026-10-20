import 'blob-polyfill'

class ResizeObserverStub {
  observe () {}
  unobserve () {}
  disconnect () {}
}

globalThis.ResizeObserver = ResizeObserverStub

window.matchMedia = function () {
  return { matches: false }
}
