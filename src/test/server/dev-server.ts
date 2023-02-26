let server
if (process.env.NODE_ENV === 'development') {
  try {
    const {setupWorker} = await import('msw')
    const {handlers} = await import('./server-handler')
    server = setupWorker(...handlers)
    server.start()
  } catch (error) {
    console.error('Failed to set up MSW server handlers.', error)
  }
} else {
  server = {}
}

export {server}
