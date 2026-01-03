"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  startTransition,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRestaurants } from "@/api/restaurants";
import { RestaurantsSearchParams, RestaurantsApiResponse } from "@/types/restaurant";

type RestaurantsContextValue = {
  data: RestaurantsApiResponse | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  isOptimized: boolean;
};

const RestaurantsContext = createContext<RestaurantsContextValue | undefined>(undefined);

interface RestaurantsProviderProps {
  children: ReactNode;
  params: RestaurantsSearchParams;
}

export function RestaurantsProvider({ children, params }: RestaurantsProviderProps) {
  const [displayedData, setDisplayedData] = useState<
    RestaurantsApiResponse | undefined
  >(undefined);

  // Prevent unnecessary re-renders during rapid typing
  const isSearchOptimized =
    params.search !== undefined &&
    params.search.length > 0 &&
    params.search.length < 3;

  const query = useQuery({
    queryKey: ["restaurants", params],
    queryFn: () => fetchRestaurants(params),
    enabled: !isSearchOptimized,
  });

  useEffect(() => {
    if (query.data) {
      startTransition(() => {
        setDisplayedData(query.data);
      });
    }
  }, [query.data]);

  const value: RestaurantsContextValue = {
    data: displayedData,
    isLoading: isSearchOptimized ? false : query.isLoading,
    error: query.error,
    refetch: query.refetch,
    isOptimized: isSearchOptimized,
  };

  return (
    <RestaurantsContext.Provider value={value}>{children}</RestaurantsContext.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantsContext);
  if (context === undefined) {
    throw new Error("useRestaurants must be used within a RestaurantsProvider");
  }
  return context;
}