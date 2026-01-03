import { useRestaurants } from '@/hooks/use-restaurants'

interface StatsCardsProps {
  currentPage: number
  totalPages: number
}

export default function StatsCards({ currentPage, totalPages }: StatsCardsProps) {
  const { data } = useRestaurants()

  if (!data) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Restaurants</h3>
        <p className="text-2xl font-bold text-gray-900">{data.totalCount}</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Average Rating</h3>
        <p className="text-2xl font-bold text-gray-900">{data.averageRating} ⭐</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Page</h3>
        <p className="text-2xl font-bold text-gray-900">{currentPage} of {totalPages}</p>
      </div>
    </div>
  )
}