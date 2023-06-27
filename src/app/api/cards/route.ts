import Card from "@/models/card"
import { connectToDB } from "@/utils/database"

export async function POST(req: Request) {
  try {
    await connectToDB()
    const {email} = await req.json()

    const cards = await Card.find({createdBy: email })

    return new Response(JSON.stringify(cards), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all cards", { status: 500 })
  }
}
