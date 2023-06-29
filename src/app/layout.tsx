import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Provider from "@/components/Provider"

import { CardsContextProvider } from "@/context/CardsContext"

export const metadata = {
  title: "Full Stack Flashcards",
  description: "Flashcards app built with Next JS, TypeScript, and Tailwind",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-blue-950 text-slate-50">
        <Provider>
          <CardsContextProvider>
            <div className="relative max-w-4xl min-h-screen m-auto">
              <Nav />
              {children}
            </div>
            <Footer />
          </CardsContextProvider>
        </Provider>
      </body>
    </html>
  )
}
