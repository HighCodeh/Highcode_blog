export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  coverImage: string
  readTime: string
  tags: string[]
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  // Import the JSON data directly
  const postsData = await import("../data/posts.json")
  return postsData.posts
}

