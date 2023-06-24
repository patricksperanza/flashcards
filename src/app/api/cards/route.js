import Card from "@/models/card"
import { connectToDB } from "@/utils/database"

export async function GET(req) {
  try {
    await connectToDB()

    const cards = await Card.find({})

    return new Response(JSON.stringify(cards), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all cards", { status: 500 })
  }
}
