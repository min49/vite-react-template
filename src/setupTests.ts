import {fetch} from 'cross-fetch'

import {server} from '@/test/server/test-server'

import '@testing-library/jest-dom'

global.fetch = fetch

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'})
})
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
