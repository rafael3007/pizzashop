import { api } from './config/axios'

export interface ApproveOrderParams {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
