export default async function getCoworkingspaces () {
    await new Promise((resolve) => setTimeout(resolve,3000))
    const response = await fetch('http://localhost:5000/api/v1/coworkingspaces', {next: {tags:['coworkingspaces']}})
    if (!response.ok) {
        throw new Error("Fail to fetch Co-Working Spaces")
    } 
    return await response.json()
}