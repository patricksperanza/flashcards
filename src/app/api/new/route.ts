import Card from "@/models/card"
import { connectToDB } from "@/utils/database"

export async function POST(req: Request) {
  const card = await req.json()

  try {
    await connectToDB()
    const newCard = new Card(card)
    await newCard.save()
    const cards = await Card.find()

    return new Response(JSON.stringify(cards), { status: 201 })
  } catch (error) {
    return new Response("Failed to create new card", { status: 500 })
  }
}
