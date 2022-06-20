This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### description

once run function in next js with not custom server

### run server

1. npm ci
2. npm run build
3. npm start

### example run server - terminal

```
[changed console!] undefined [expected]: undefined // before run next
[changed console!] ready - started server on 0.0.0.0:3000, url: http://localhost:3000 // next run
[changed console!] info - Loaded env from **\next-init-function\.env // next run
[changed console!] run start // after run next
[changed console!] Hello!! [expected]: Hello!! // after run next
[changed console!] [in ServerSideProps] is console changed? // after run next (enter root page)
```

### Read the app.js file

```js
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
```
