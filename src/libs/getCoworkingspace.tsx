export default async function getCoworkingspace(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch Co-working Space")
    }
    return await response.json()
}