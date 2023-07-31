import Card from "@/models/card"
import { connectToDB } from "@/utils/database"

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
  try {
    await connectToDB()

    const id = await params.id

    const res = await Card.findByIdAndDelete(id)
    const cards = await Card.find()

    return new Response(JSON.stringify(cards), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all cards", { status: 500 })
  }
}
