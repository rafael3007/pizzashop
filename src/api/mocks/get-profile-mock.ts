import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id-1',
      name: 'Custom User',
      email: 'rafael.brito.1422@gmail.com',
      createdAt: new Date(),
      updatedAt: null,
      phone: '77988257032',
      role: 'manager',
    })
  },
)
