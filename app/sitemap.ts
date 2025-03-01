import { getAllPosts } from "@/lib/posts"

export default async function sitemap() {
  // Usando um URL base padrão
  const baseUrl = "https://highcode.com.br"
  const posts = await getAllPosts()

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tutoriais`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}
