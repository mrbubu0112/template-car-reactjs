import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Navbar from '../../components/AppBar/Nav'
import { describe, it, expect } from '@jest/globals'


describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />)
  })

  it('changes background color when scrolled', () => {
    const { getByTestId } = render(<Navbar />)
    const navbar = getByTestId('navbar')

    expect(navbar.style.backgroundColor).toBe('transparent')

    // Simulate scrolling
    window.scrollY = 100
    fireEvent.scroll(window)

    expect(navbar.style.backgroundColor).toBe('black')
  })

  it('toggles navbar collapse', () => {
    const { getByTestId } = render(<Navbar />)
    const navbarToggle = getByTestId('navbar-toggle')
    const navbarCollapse = getByTestId('navbar-collapse')

    expect(navbarCollapse.style.display).toBe('none')

    // Simulate navbar toggle click
    fireEvent.click(navbarToggle)

    expect(navbarCollapse.style.display).toBe('block')
  })
})