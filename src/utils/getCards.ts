export async function getCards(email: string) {
    const res = await fetch("http://localhost:3000/api/cards", {
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