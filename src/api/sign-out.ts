import { api } from './config/axios'

export async function signOut() {
  await api.post('/sign-out')
}
