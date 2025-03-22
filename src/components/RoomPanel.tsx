'use client'
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
export default function RoomPanel() {

    const compareReducer = ( compareList:Set<string>, action:{type:string, roomName:string} )=>{
        switch(action.type) {
            case 'add': {
                return new Set( compareList.add(action.roomName) )
            }
            case 'remove': {
                compareList.delete(action.roomName)
                return new Set( compareList )
            }
            default: return compareList
        }
    }

    const [ compareList, dispatchCompare ] = useReducer(compareReducer, new Set<string>() )

    /**
     * Mock Data for Demontration Only
     */
    const mockRoomRepo = [
        {rid: "001", name: "Room 1", image: "/img/room1.jpg" },
        {rid: "002", name: "Room 2", image: "/img/room2.jpg" },
        {rid: "003", name: "Room 3", image: "/img/room3.jpg" },
    ]

    return (
    <div>
        <div style={{margin:"20px", display:"flex", 
        flexDirection:"row", alignContent:"space-around",
        justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
            {
                mockRoomRepo.map((roomItem)=>(
                    <Link href={`/coworkingspace/${roomItem.rid}`} className="w-1/5">
                    <ProductCard roomName={roomItem.name} imgSrc={roomItem.image}
                        onCompare={ (room:string)=>dispatchCompare({type:'add', roomName:room}) }
                    />
                    </Link>
                ))
            }
        </div>
        <div className="w-full text-xl font-medium">Compare List: { compareList.size } </div>
        { Array.from(compareList).map( (room)=><div key={room} 
        onClick={()=>dispatchCompare({type:'remove', roomName:room})}>
            {room}</div> ) }
    </div>
    );
}