import { render } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

export function renderWithRouter(ui, options) {
  return render(<BrowserRouter>{ui}</BrowserRouter>, options)
}

export function renderAt(path, ui, options) {
    return render(<MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>, options)
}