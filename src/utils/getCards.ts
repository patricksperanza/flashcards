export async function getCards() {
    const res = await fetch("http://localhost:3000/api/cards", {
      cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("failed to get cards")
    }
    return res.json()
  }