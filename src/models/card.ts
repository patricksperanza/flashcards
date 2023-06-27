import { Schema, model, models } from "mongoose"

const CardSchema = new Schema(
  {
    createdBy: String,
    question: String,
    answer: String,
  },
  { timestamps: true }
)

const Card = models.Card || model("Card", CardSchema)

export default Card
