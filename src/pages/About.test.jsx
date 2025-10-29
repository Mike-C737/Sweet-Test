import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import About from './About.jsx'

test('renders About heading', () => {
  render(<About />)
  expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
})
