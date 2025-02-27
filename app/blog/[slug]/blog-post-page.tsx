"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Post } from "@/lib/posts"
import ReactMarkdown from "react-markdown"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { BackButton } from "@/components/back-button"

interface BlogPostPageProps {
  post: Post
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-black to-purple-950">
      <MainNav />

      <div className="fixed inset-0 bg-black/40 backdrop-blur-[100px] -z-10" />

      <article className="container mx-auto px-4 pt-24 md:pt-32 animate-fade-up pb-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <BackButton />

          <div className="space-y-4 mb-8">
            <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">{post.category}</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
          </div>

          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden group mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-black/20 z-10 mix-blend-overlay" />
            {post.coverImage ? (
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover transition-all duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzAyMDQwIi8+PC9zdmc+"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
                <span className="text-purple-300/50 text-lg font-medium">No cover image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-purple-500/20 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-400 to-secondary flex items-center justify-center text-white text-lg md:text-xl font-bold">
                {post.author[0]}
              </div>
              <div>
                <div className="font-medium text-white text-sm md:text-base">{post.author}</div>
                <div className="text-xs md:text-sm text-gray-400">{post.date}</div>
              </div>
            </div>
          </div>

          <div className="article-content prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none text-white">
            <style jsx global>{`
              .article-content h1, 
              .article-content h2, 
              .article-content h3, 
              .article-content h4, 
              .article-content h5, 
              .article-content h6 {
                color: white !important;
              }
              .article-content p, 
              .article-content li, 
              .article-content blockquote {
                color: #e2e2e2 !important;
              }
              .article-content a {
                color: #d8b4fe !important;
              }
              .article-content code {
                color: #d8b4fe !important;
                background: rgba(0, 0, 0, 0.3);
                padding: 2px 4px;
                border-radius: 3px;
              }
              .article-content pre {
                background: rgba(0, 0, 0, 0.5) !important;
                border: 1px solid rgba(147, 51, 234, 0.2) !important;
              }
            `}</style>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <Separator className="my-8 bg-purple-500/20" />

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-purple-300 border-purple-500/50 hover:bg-purple-500/10 text-xs md:text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

