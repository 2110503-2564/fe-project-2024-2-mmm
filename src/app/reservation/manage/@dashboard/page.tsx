import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import Coworkingspace from "@/db/models/Coworkingspace"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashboradPage() {

    const addCWS = async (addCWSForm:FormData) => {
        'use server'
        const name = addCWSForm.get("name")
        const address = addCWSForm.get("address")
        const district = addCWSForm.get("district")
        const province = addCWSForm.get("province")
        const tel = addCWSForm.get("tel")
        const openTime = addCWSForm.get("openTime")
        const closeTime = addCWSForm.get("closeTime")
        const picture = addCWSForm.get("picture")

        try {
            await dbConnect()
            const coworkingspace = await Coworkingspace.create({
                "name": name,
                "address": address,
                "district": district,
                "province": province,
                "tel": tel,
                "openTime": openTime,
                "closeTime": closeTime,
                "picture": picture
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("coworkingspaces")
        redirect("/coworkingspace")
    }

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
            {
                (profile.data.role == 'admin')?
                <form action={addCWS}>
                    <div className="text-xl text-blue-700">Create Co-Working Space</div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                        <input type="text" required id='name' name='name' placeholder="co-working space name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">Address</label>
                        <input type="text" required id='address' name='address' placeholder="address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">District</label>
                        <input type="text" required id='district' name='district' placeholder="district"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="province">Province</label>
                        <input type="text" required id='province' name='province' placeholder="province"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel.</label>
                        <input type="text" required id='tel' name='tel' placeholder="02-1234567"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="openTime">Open Time</label>
                        <input type="text" required id='openTime' name='openTime' placeholder="08.00 a.m."
                        className="bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                        
                        <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="closeTime">Close Time</label>
                        <input type="text" required id='closeTime' name='closeTime' placeholder="10.00 p.m." 
                        className="bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Picture</label>
                        <input type="text" required id='picture' name='picture' placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Room</button>
                </form>:null
            }
        </main>
    )
}