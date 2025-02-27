import { Suspense } from "react"
import HomePage from "./home-page"
import postsData from "@/data/posts.json"

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-white">Carregando...</div>
        </div>
      }
    >
      <HomePage initialPosts={postsData.posts} />
    </Suspense>
  )
}

