import Image from "next/image"
export default function RoomDetailPage( {params} : { params: {rid:string} } ) {
    
    /**
     * Mock Data for Demontration Only
     */
    const mockRoomRepo = new Map()
    mockRoomRepo.set("001", {name: "Room 1", image: "/img/room1.jpg"})
    mockRoomRepo.set("002", {name: "Room 2", image: "/img/room2.jpg"})
    mockRoomRepo.set("003", {name: "Room 3", image: "/img/room3.jpg"})
    
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Room ID {params.rid}</h1>
            <div className="flex flex-row my-5">
                <Image src={ (mockRoomRepo.get(params.rid)).image}
                alt='Room Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"/>
                <div className="text-md mx-5">{ (mockRoomRepo.get(params.rid)).name }</div>

            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{rid:'001'}, {rid:'002'}, {rid:'003'}]
}