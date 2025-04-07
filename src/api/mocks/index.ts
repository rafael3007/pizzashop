import { setupWorker } from 'msw/browser'

import { env } from '../../../env.ts'

export const worrker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worrker.start()
}
