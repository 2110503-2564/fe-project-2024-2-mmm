"use client"
import Card from "@/components/Card";
import Link from "next/link";
import { useReducer } from "react";

export default function RoomPanel () {
    const i = (map : Map<string, number>) => {
        map.set('Room 1', 0)
        map.set('Room 2', 0)
        map.set('Room 3', 0)
        return map
    }

    const ratingReducer = (map : Map<string, number>, action : {type:string, name:string, rating:number}) => {   
        switch (action.type) {
            case 'add' :
                if (action.rating == null) {
                    action.rating = 0
                }
                return new Map(map.set(action.name, action.rating))
            case 'remove' :
                map.delete(action.name)
                return new Map(map)
            default : return map
            }   
        }

    const [map, dispatchRating] = useReducer(ratingReducer, new Map<string,number>, i);

    const mockCoworkingspaceRepo = [{rid:"001", name:"Room 1", image:"/img/room1.jpg"},
        {rid:"002", name:"Room 2", image:"/img/room2.jpg"},
        {rid:"003", name:"Room 3", image:"/img/room3.jpg"}]
     
    return (
    <div>
        <div className="m-5 flex flex-row content-around justify-around flex-wrap">
            {
                mockCoworkingspaceRepo.map((Item) => (
                    <Link href={`/coworkingspace/${Item.rid}`} className="w-1/5">
                        <Card coworkingspaceName={Item.name} imgSrc={Item.image}
                        onRating={(coworkingspacename:string, rating:number) => dispatchRating({type:'add', name:coworkingspacename, rating:rating})}/>
                    </Link>
                ))
            }
        </div>
    </div>
  );
}