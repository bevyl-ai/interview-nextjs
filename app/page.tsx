'use client'

import { useState } from 'react'
import { RestaurantsProvider, useRestaurants } from '@/hooks/use-restaurants'
import PageHeader from '@/components/PageHeader'
import StatsCards from '@/components/StatsCards'
import FilterSection from '@/components/FilterSection'
import LoadingSpinner from '@/components/LoadingSpinner'
import RestaurantsList from '@/components/RestaurantsList'
import Pagination from '@/components/Pagination'
import EmptyState from '@/components/EmptyState'
import ErrorState from '@/components/ErrorState'

function RestaurantsContent({
  search,
  setSearch,
  selectedCuisine,
  setSelectedCuisine,
  currentPage,
  setCurrentPage
}: {
  search: string
  setSearch: (value: string) => void
  selectedCuisine: string
  setSelectedCuisine: (value: string) => void
  currentPage: number
  setCurrentPage: (value: number) => void
}) {
  const { data, isLoading, error, isOptimized: isSearchOptimized } = useRestaurants()

  const totalPages = data ? Math.ceil(data.totalCount / data.pageSize) : 0

  if (error) {
    return <ErrorState />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl p-8">
        <PageHeader />

        <StatsCards currentPage={currentPage} totalPages={totalPages} />

        <FilterSection
          search={search}
          setSearch={setSearch}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          setCurrentPage={setCurrentPage}
          isSearchOptimized={isSearchOptimized}
        />

        {isLoading && <LoadingSpinner />}

        {data && !isLoading && <RestaurantsList />}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />

        {data && data.restaurants.length === 0 && !isLoading && <EmptyState />}
      </div>
    </div>
  )
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <RestaurantsProvider
      params={{
        search,
        cuisine: selectedCuisine,
        page: currentPage,
        pageSize: 5
      }}
    >
      <RestaurantsContent
        search={search}
        setSearch={setSearch}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </RestaurantsProvider>
  )
}