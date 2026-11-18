import 'blob-polyfill'

class ResizeObserverStub {
  observe () {}
  unobserve () {}
  disconnect () {}
}

globalThis.ResizeObserver = ResizeObserverStub

Object.defineProperty(Range.prototype, 'getClientRects', {
  configurable: true,
  value: () => []
})

window.matchMedia = function () {
  return { matches: false }
}
