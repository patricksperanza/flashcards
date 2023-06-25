import "./globals.css"
import Nav from "@/components/Nav"
import { CardsContextProvider } from "@/context/CardsContext"

export const metadata = {
  title: "Full Stack Flashcards",
  description: "Flashcards app built with Next JS, TypeScript, and Tailwind",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-950 text-slate-50">
        <CardsContextProvider>
          <div className="max-w-4xl m-auto">
            <Nav />
            {children}
          </div>
        </CardsContextProvider>
      </body>
    </html>
  )
}
