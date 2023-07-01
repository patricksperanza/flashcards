import { BASE_URL } from "./BASE_URL"

export async function getCards(email: string) {
    const res = await fetch(`${BASE_URL}/api/cards`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        email
      }),
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("failed to get cards")
    }
    return res.json()
  }