import { http, HttpResponse } from 'msw'

import { GetOrdersResponse } from '../get-orders'

type Orders = GetOrdersResponse['orders']

type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'delivered',
  'canceled',
  'delivering',
  'processing',
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    restaurantName: `Restaurant ${i + 1}`,
    status: statuses[i % 5],
    createdAt: new Date().toISOString(),
    total: parseFloat((Math.random() * 10000).toFixed(2)),
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.toLowerCase().includes(customerName.toLowerCase()),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.toLowerCase().includes(orderId.toLowerCase()),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        totalCount: filteredOrders.length,
        pageIndex,
        perPage: 10,
      },
    })
  },
)
