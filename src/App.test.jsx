import { test, expect } from 'vitest';
import { screen } from '@testing-library/react'
import { renderWithRouter } from '@/test-utils.jsx'
import App from './App.jsx'


test('renders heading', () => {
  renderWithRouter(
      <App />
  )
  expect(screen.getByRole('heading', { name: /my app/i })).toBeInTheDocument()
})
