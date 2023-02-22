import '@testing-library/jest-dom'
import {fetch} from 'cross-fetch'
import {server} from 'test/server/test-server'

global.fetch = fetch

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'})
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
