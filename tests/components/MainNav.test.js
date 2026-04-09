import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('it displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('PetVue Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('it displays pages for navigations', () => {
    render(MainNav)
    const navItems = screen.getAllByRole('listitem')
    const navTexts = navItems.map((item) => item.textContent)
    expect(navTexts).toEqual([
      'Teams',
      'Locations',
      'Life at PetVue',
      'How we hire',
      'Sudents',
      'Jobs',
    ])
  })
})
