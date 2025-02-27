"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/lib/posts"
import { ScrollProgress } from "@/components/scroll-progress"
import { ParticleBackground } from "@/components/particle-background"
import { GeometricDecorations } from "@/components/geometric-decorations"
import { MainNav } from "@/components/main-nav"
import { SocialLinks } from "@/components/social-links"

interface HomePageProps {
  initialPosts: Post[]
}

export default function HomePage({ initialPosts }: HomePageProps) {
  const posts = initialPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollProgress />
      <MainNav />

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-gradient overflow-hidden pt-20">
        <ParticleBackground />
        <GeometricDecorations />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#8c2aff] rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#8c2aff] rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-9 text-center relative z-10">
          <span className="text-[#8c2aff] text-xl mb-3 block font-medium">Bem-vindo ao</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            High Code <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Fique por dentro dos detalhes do desenvolvimento do High Boy !
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              className="glass-effect px-8 py-6 text-lg hover:bg-[#8c2aff]/20 transition-all duration-300"
              onClick={() => {
                document.getElementById('latest-posts')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Últimos Artigos
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-6 border-2 border-white/30 rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white/30 rotate-90" />
          </div>
        </div>
      </div>

      {/* Featured Post Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gradient mb-16">Artigo em Destaque</h2>
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              prefetch={true}
              className="block transition-all duration-300 hover:scale-[1.01]"
            >
              <article className="glass-card overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative h-[300px] sm:h-[400px] md:h-full w-full">
                    <Image
                      src={featuredPost.coverImage || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="bg-[#8c2aff]/10 text-[#8c2aff] hover:bg-[#8c2aff]/20 w-fit">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mt-4 mb-4 group-hover:text-[#8c2aff] transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-white/60 text-lg mb-6">{featuredPost.excerpt}</p>
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                      <div className="font-medium text-white/80">{featuredPost.author}</div>
                      <div className="flex items-center text-white/60">
                        <Clock className="h-5 w-5 mr-2" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )}
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-gradient">Últimos Artigos</h2>
            <Link href="/blog"></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherPosts.map((post, index) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="animate-fade-up transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 150}ms` }}
                prefetch={true}
              >
                <article className="glass-card overflow-hidden group">
                  <div className="relative h-52 sm:h-48 w-full">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <Badge className="bg-[#8c2aff]/10 text-[#8c2aff] hover:bg-[#8c2aff]/20">{post.category}</Badge>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8c2aff] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/60 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <div className="font-medium text-white/80">{post.author}</div>
                      <div className="flex items-center text-sm text-white/60">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8c2aff] rounded-full blur-[120px] animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Fique Atualizado</h2>
            <p className="text-xl text-white/60 mb-12">
              Inscreva-se para receber as últimas novidades, tutoriais e dicas de segurança
            </p>
            <Button 
  className="glass-effect px-8 py-6 text-lg hover:bg-[#8c2aff]/20 transition-all duration-300"
  onClick={() => window.location.href = 'https://highboy.com.br/cadastro/'}
>
  Receber Novidades
</Button>
          </div>
        </div>
      </section>

      <SocialLinks />
    </main>
  )
}
