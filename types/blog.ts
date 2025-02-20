export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    content: string;
    author: string;
    readingTime?: string;
    tags?: string[];
    status: 'draft' | 'published';
  }