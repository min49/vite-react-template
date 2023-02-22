import {setupWorker} from 'msw'

import {handlers} from './server-handler'

let server
if (process.env.NODE_ENV === 'development') {
  server = setupWorker(...handlers)
  server.start()
} else {
  server = {}
}

export {server}
