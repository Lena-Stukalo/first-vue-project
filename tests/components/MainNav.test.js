import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest'
import userEvent from '@testing-library/user-event'

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
  describe('when user logIn', () => {
    it('it displays profile picture', async () => {
      render(MainNav)

      let profileImg = screen.queryByRole('img', { name: /user profile image/i })
      expect(profileImg).not.toBeInTheDocument()

      let loginButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(loginButton)

      profileImg = screen.getByRole('img', { name: /user profile image/i })
      loginButton = screen.queryByRole('button', { name: /sign in/i })

      expect(profileImg).toBeInTheDocument()
      expect(loginButton).not.toBeInTheDocument()
    })
  })
})
