// Sanity Image URL Builder
// Optimizes and transforms images from Sanity CDN

import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';
import { SanityAsset } from '@/types';

const builder = imageUrlBuilder(client);

/**
 * Generate optimized image URL from Sanity image asset
 * @param source - Sanity image asset
 * @returns Image URL builder instance
 */
export function urlFor(source: SanityAsset) {
  return builder.image(source);
}

/**
 * Get responsive image URLs for srcSet
 * @param source - Sanity image asset
 * @param widths - Array of widths for responsive images
 * @returns Object with URL and srcSet
 */
export function getResponsiveImageUrls(source: SanityAsset, widths: number[] = [320, 640, 768, 1024, 1280, 1536]) {
  const urls = widths.map(width => {
    const url = urlFor(source).width(width).format('webp').quality(85).url();
    return `${url} ${width}w`;
  });

  return {
    src: urlFor(source).width(1024).format('webp').quality(85).url(),
    srcSet: urls.join(', ')
  };
}
