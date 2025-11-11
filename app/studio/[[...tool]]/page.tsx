'use client';

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 * 
 * Note: Sanity Studio is client-only for compatibility with Next.js builds
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { useEffect, useState } from 'react'

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render on server to avoid build issues
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading Sanity Studio...</p>
        </div>
      </div>
    )
  }

  return <NextStudio config={config} />
}
