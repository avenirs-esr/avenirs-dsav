import 'blob-polyfill'

window.matchMedia = function () {
  return { matches: false }
}
