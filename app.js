import changeConsole from './init/changeConsole'

// before next loading

changeConsole()
console.log(process.env.ENV_TEST, '[expected]: undefined') // undefined

// after next loading

const command = process.argv[2]
if (['dev', 'start'].includes(command)) {
  require('./node_modules/next/dist/bin/next')
  check(init)
}

// function
// function
// function

// next loading check
/** @param {Function} fn */
function check(fn) {
  setTimeout(() => {
    if (!('LOAD_CHECK' in process.env)) {
      setTimeout(check, 0, fn)
      return
    }
    fn()
  }, 50)
}

// after init function
function init() {
  switch (command) {
    case 'dev': {
      // here dev script
      console.log('run dev')
      break
    }
    case 'start': {
      // here start script
      console.log('run start')
      break
    }
  }
  // commons script
  console.log(process.env.ENV_TEST, '[expected]: Hello!!') // 'Hello!!'
}
