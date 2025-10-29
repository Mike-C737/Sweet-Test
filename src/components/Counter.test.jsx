import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import Counter from './Counter.jsx'

test('increments on click', async () => {
  const u = userEvent.setup()
  render(<Counter start={1} />)
  await u.click(screen.getByRole('button', { name: /count: 1/i }))
  expect(screen.getByRole('button', { name: /count: 2/i })).toBeInTheDocument()
})
