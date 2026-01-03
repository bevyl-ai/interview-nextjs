import Image from 'next/image'
import { Restaurant } from '@/types/restaurant'

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{restaurant.name}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {restaurant.cuisine}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              {restaurant.neighborhood}
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {restaurant.priceRange}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Rating: {restaurant.rating} ⭐</span>
            <span>Added: {new Date(restaurant.createdAt).toLocaleDateString()}</span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              restaurant.status === 'open' ? 'bg-green-100 text-green-800' :
              restaurant.status === 'closed' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {restaurant.status === 'temporarily-closed' ? 'Temp. Closed' : restaurant.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}