import { setupWorker } from 'msw/browser'

import { env } from '../../../env.ts'
import { registerRestaurantMock } from './register-restaurant-mock.ts'
import { signInMock } from './sign-in-mock.ts'

export const worrker = setupWorker(signInMock, registerRestaurantMock)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worrker.start()
}
