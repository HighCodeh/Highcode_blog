import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "High Code Blog",
  description:
    "Blog especializado em Hardware Hacking, Pentest, Segurança da Informação e Tecnologia. Tutoriais, dicas e novidades sobre o High Boy e hacking ético.",
  keywords: [
    "high boy",
    "high code",
    "hardware hacking",
    "hacker ético",
    "pentest",
    "segurança da informação",
    "cybersecurity",
    "tecnologia",
    "hacking",
    "ethical hacking",
    "segurança cibernética",
    "tutoriais hacking",
    "ferramentas hacking",
    "análise de hardware",
    "engenharia reversa",
    "vulnerabilidades",
    "testes de invasão",
    "red team",
    "blue team",
    "ctf",
    "capture the flag",
  ],
  authors: [{ name: "High Code Team" }],
  creator: "High Code",
  publisher: "High Code",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://highboy.com.br",
    siteName: "High Code Blog",
    title: "High Code Blog - Hardware Hacking e Segurança",
    description: "Blog especializado em Hardware Hacking, Pentest e Segurança da Informação",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High Code Blog",
    description: "Hardware Hacking, Pentest e Segurança da Informação",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://highboy.com.br" />
        <meta name="theme-color" content="#8c2aff" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}



import './globals.css'