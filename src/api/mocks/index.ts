import { setupWorker } from 'msw/browser'

import { env } from '../../../env.ts'
import { approveOrderMock } from './approve-order-mock.ts'
import { cancelOrderMock } from './cancel-order-mock.ts'
import { deliverOrderMock } from './deliver-order-mock.ts'
import { dispatchOrderMock } from './dispatch-order-mock.ts'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock.ts'
import { getDayOrdersAmountMock } from './get-day-orders-amount.ts'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock.ts'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount.ts'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.ts'
import { getMonthRevenueMock } from './get-month-revenue.ts'
import { getOrdersDetailsMock } from './get-order-details-mocl.ts'
import { getOrdersMock } from './get-orders-mock.ts'
import { getPopularProductsMock } from './get-popular-products-mock.ts'
import { getProfileMock } from './get-profile-mock.ts'
import { registerRestaurantMock } from './register-restaurant-mock.ts'
import { signInMock } from './sign-in-mock.ts'
import { updateProfileMock } from './update-profile-mock.ts'

export const worrker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getMonthCanceledOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getOrdersMock,
  getOrdersDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worrker.start()
}
