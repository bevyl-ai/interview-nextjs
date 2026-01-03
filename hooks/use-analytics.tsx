"use client";

import { useEffect } from "react";

export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.debug('Analytics Event:', eventName, properties);
  };

  const trackSearchOptimization = (isOptimized: boolean, searchLength: number) => {
    trackEvent('search_optimization_ab_test', {
      variant: isOptimized ? 'optimized' : 'standard',
      search_length: searchLength,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackEvent,
    trackSearchOptimization
  };
}