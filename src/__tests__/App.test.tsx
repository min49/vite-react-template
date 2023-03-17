import userEvent from '@testing-library/user-event'

import App from '@/App'
import {renderWithProviders, screen} from '@/test/app-test-utils'

describe('<App />', () => {
  it('renders', async () => {
    renderWithProviders(<App />)

    userEvent.click(screen.getByRole('link', {name: /profile/i}))

    expect(await screen.findByText(/world/i)).toBeVisible()
  })
})
