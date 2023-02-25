import App from 'App'
import {
  renderWithProviders,
  screen,
  waitForElementToBeRemoved,
} from 'test/app-test-utils'

describe('<App />', () => {
  it('renders', async () => {
    renderWithProviders(<App />)

    // Wait for loading data to finish
    await waitForElementToBeRemoved(() => screen.queryByText(/\.\.\./))

    expect(await screen.findByText(/world/i)).toBeVisible()
  })
})
