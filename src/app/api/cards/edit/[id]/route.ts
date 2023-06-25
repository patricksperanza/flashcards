import Card from "@/models/card"
import { connectToDB } from "@/utils/database"

export async function POST(req: Request) {
  try {
    await connectToDB()

    const {_id, question, answer } = await req.json()

    const res = await Card.findByIdAndUpdate(_id, {_id, question, answer})

    return new Response(JSON.stringify(res), { status: 200 })
  } catch (error) {
    return new Response("Failed to update card", { status: 500 })
  }
}
