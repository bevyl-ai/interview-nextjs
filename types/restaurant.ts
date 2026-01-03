export interface Review {
  score: number // 1-5 stars
  review: string
  date: string // ISO date string
  reviewer: string
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  neighborhood: string
  rating: number // 1-5 stars
  createdAt: string // ISO date string
  status: 'open' | 'closed' | 'temporarily-closed'
  imageUrl: string
  description?: string
  address?: string
  phone?: string
  hours?: string
  reviews: Review[]
}

export interface RestaurantsApiResponse {
  restaurants: Restaurant[]
  totalCount: number
  averageRating: number
  page: number
  pageSize: number
}

export interface RestaurantsSearchParams {
  search?: string
  cuisine?: string
  page?: number
  pageSize?: number
}