import {render, RenderOptions} from '@testing-library/react'

import {AppProviders} from 'context'

async function renderWithProviders(
  ui: React.ReactElement,
  options?: RenderOptions,
) {
  return render(ui, {...options, wrapper: AppProviders})
}

export * from '@testing-library/react'
export {renderWithProviders}
