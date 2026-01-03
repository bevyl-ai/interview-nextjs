import { useRestaurants } from '@/hooks/use-restaurants'
import RestaurantCard from './RestaurantCard'

export default function RestaurantsList() {
  const { data, isLoading } = useRestaurants()

  if (!data || isLoading) return null

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          NYC Restaurants ({data.totalCount} results)
        </h2>
      </div>
      <div className="divide-y divide-gray-200">
        {data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}