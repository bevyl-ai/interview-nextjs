import { mockRestaurants } from '@/data/restaurants'
import { RestaurantsApiResponse, RestaurantsSearchParams } from '@/types/restaurant'

const simulateLatency = () => {
  const delay = Math.floor(Math.random() * 300) + 200 // 200-500ms
  return new Promise(resolve => setTimeout(resolve, delay))
}

export const fetchRestaurants = async (params: RestaurantsSearchParams = {}): Promise<RestaurantsApiResponse> => {
  await simulateLatency()

  const { search = '', cuisine = '', page = 1, pageSize = 5 } = params

  let filteredRestaurants = [...mockRestaurants]

  // Filter by search term
  if (search.trim()) {
    filteredRestaurants = filteredRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Filter by cuisine
  if (cuisine) {
    filteredRestaurants = filteredRestaurants.filter(restaurant =>
      restaurant.cuisine === cuisine
    )
  }

  // Calculate pagination
  const totalCount = filteredRestaurants.length
  const averageRating = filteredRestaurants.length > 0
    ? parseFloat((filteredRestaurants.reduce((sum, restaurant) => sum + restaurant.rating, 0) / filteredRestaurants.length).toFixed(1))
    : 0
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedRestaurants = filteredRestaurants.slice(startIndex, endIndex)

  return {
    restaurants: paginatedRestaurants,
    totalCount,
    averageRating,
    page,
    pageSize
  }
}