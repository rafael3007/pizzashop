import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      phone: '123456789',
      email: 'rafael.brito.1422@gmail.com',
    },
    createdAt: new Date().toISOString(),
    status: 'pending',
    orderItems: [
      {
        id: 'order-item-1',
        product: {
          name: 'Pizza',
        },
        quantity: 2,
        priceInCents: 1000,
      },
      {
        id: 'order-item-2',
        product: {
          name: 'Pizza Margueritta',
        },
        quantity: 1,
        priceInCents: 2000,
      },
    ],
    totalInCents: 3000,
  })
})
