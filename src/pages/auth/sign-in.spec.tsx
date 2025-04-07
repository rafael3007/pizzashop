import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '@/lib/react-query'

import Signin from './sign-in'

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    // Add your test logic here
    const wrapper = render(<Signin />, {
      wrapper: ({ children }) => (
        <HelmetProvider>
          <MemoryRouter
            initialEntries={['/sign-in?email=rafael.brito.1422@gmail.com']}
          >
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        </HelmetProvider>
      ),
    })

    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('rafael.brito.1422@gmail.com')
  })
})
