import { Suspense } from "react"
import HomePage from "./home-page"
import postsData from "@/data/posts.json"

export default function Page() {
  return <HomePage initialPosts={postsData.posts} />
}


