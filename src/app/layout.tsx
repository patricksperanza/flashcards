import "./globals.css"
import Nav from "@/components/Nav"
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
            <div className="max-w-4xl m-auto">
              <Nav />
              {children}
            </div>
          </CardsContextProvider>
        </Provider>
      </body>
    </html>
  )
}
