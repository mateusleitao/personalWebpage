import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('portfolio homepage', () => {
  it('presents one descriptive main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: "Hi, I'm Lange" }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('provides three uniquely named social profile links', () => {
    render(<App />)

    const socialProfiles = screen.getByRole('list', {
      name: 'Social profiles',
    })
    const links = within(socialProfiles).getAllByRole('link')

    expect(links).toHaveLength(3)
    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual([
      'GitHub profile',
      'LinkedIn profile',
      'Dev.to profile',
    ])
  })

  it('describes the portrait', () => {
    render(<App />)

    expect(
      screen.getByRole('img', { name: 'Black-and-white portrait of Lange' }),
    ).toHaveAttribute('width', '1448')
  })
})
