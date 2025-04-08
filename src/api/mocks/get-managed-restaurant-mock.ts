import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id-1',
    name: 'Pizza Shop',
    createdAt: new Date(),
    updatedAt: null,
    description: 'Custom restaurant description',
    managedId: 'custom-user-id-1',
  })
})
