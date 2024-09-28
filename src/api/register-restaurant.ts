import { api } from './config/axios'

export interface registerRestaurantBody {
  email: string
  restaurantName: string
  managerName: string
  phone: string
}

export async function registerRestaurant({
  email,
  restaurantName,
  managerName,
  phone,
}: registerRestaurantBody) {
  await api.post('/restaurants', {
    email,
    restaurantName,
    managerName,
    phone,
  })
}
