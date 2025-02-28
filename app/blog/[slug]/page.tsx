import { Suspense } from "react"
import BlogPostPage from "./blog-post-page"
import postsData from "@/data/posts.json"

export default function Page({ params }: { params: { slug: string } }) {
  const post = postsData.posts.find((post) => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Post não encontrado</div>
      </div>
    )
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Carregando...</div>
        </div>
      }
    >
      <BlogPostPage post={post} />
    </Suspense>
  )
}