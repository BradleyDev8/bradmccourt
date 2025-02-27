import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL - replace with your actual domain
  const baseUrl = 'https://bradmccourt.xyz'; 
  
  // Current date for static routes
  const currentDate = new Date();
  
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
  
  // Dynamic routes from blog posts
  let blogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const posts = await getAllPosts();
    
    if (posts && Array.isArray(posts)) {
      blogRoutes = posts.map((post) => {
        // Safely handle the date
        let lastModified: Date;
        try {
          // Try to create a valid date from publishedAt
          if (post.publishedAt) {
            const dateObj = new Date(post.publishedAt);
            // Validate the date is valid
            lastModified = isNaN(dateObj.getTime()) ? currentDate : dateObj;
          } else {
            lastModified = currentDate; // Use current date if no publishedAt
          }
        } catch {
          // Empty catch block without parameter to avoid unused variable warning
          lastModified = currentDate; // Fallback to current date on any error
        }
        
        return {
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified,
          changeFrequency: 'monthly',
          priority: 0.6,
        };
      });
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // Continue with empty blog routes if there's an error
  }
  
  return [...staticRoutes, ...blogRoutes];
} 