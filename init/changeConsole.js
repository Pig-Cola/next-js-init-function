Object.defineProperty(exports, '__esModule', { value: true })

const changeConsole = () => {
  if (!global || global.alreayOnce) return
  global.alreayOnce = true
  let changeTarget = ['log', 'error', 'warn']

  changeTarget.forEach((v) => {
    let _old = console[v]
    global._old_console = global._old_console || {}
    global._old_console[v] = _old
    global.console[v] = (...args) => _old('[changed console!]', ...args)
  })
}

module.exports = changeConsole
