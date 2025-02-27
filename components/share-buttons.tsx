"use client"

import { Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url)
    toast.success("Link copied to clipboard!")
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-purple-400"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
      >
        <Twitter className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-purple-400"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
      >
        <Facebook className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-purple-400"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white hover:text-purple-400" onClick={copyToClipboard}>
        <LinkIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}

