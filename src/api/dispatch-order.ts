import { api } from './config/axios'

export interface DispactchOrderParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispactchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
