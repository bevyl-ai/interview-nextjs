import { getAllCuisines } from '@/data/restaurants'
import { useAnalytics } from '@/hooks/use-analytics'
import { useEffect } from 'react'

interface FilterSectionProps {
  search: string
  setSearch: (value: string) => void
  selectedCuisine: string
  setSelectedCuisine: (value: string) => void
  setCurrentPage: (value: number) => void
  isSearchOptimized?: boolean
}

export default function FilterSection({
  search,
  setSearch,
  selectedCuisine,
  setSelectedCuisine,
  setCurrentPage,
  isSearchOptimized
}: FilterSectionProps) {
  const allCuisines = getAllCuisines()
  const { trackSearchOptimization } = useAnalytics()

  useEffect(() => {
    if (search && isSearchOptimized !== undefined) {
      trackSearchOptimization(isSearchOptimized, search.length)
    }
  }, [isSearchOptimized, search.length])

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Search by name
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            placeholder="Search restaurants..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {/* <span className="text-sm text-gray-200 mt-1 inline-block">
            {isSearchOptimized ? 'Type more to search...' : '\u00A0'}
          </span> */}
        </div>
        <div>
          <label htmlFor="cuisine-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by cuisine
          </label>
          <select
            id="cuisine-filter"
            value={selectedCuisine}
            onChange={(e) => {
              setSelectedCuisine(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All cuisines</option>
            {allCuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}