"use client";
import { removeReservation } from "@/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ReservationItem } from "../../interfaces";

export default function ReservationCart() {
    const reservationItems = useAppSelector((state) => state.cartSlice.cwsItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
    <> 
        <div className="text-xl flex justify-center items-center">Your Reservation</div>
            {
                reservationItems.length === 0 ? <div className="text-md flex justify-center items-center">No Reservation</div>
                :(reservationItems.map((reservationItem:ReservationItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.name && reservationItem.room}>
                    <div className="text-xl text-black">Name: {reservationItem.name}</div>
                    <div className="text-xl text-black">Venue: {reservationItem.room}</div>
                    <div className="text-xl text-black">Reservation Date: {reservationItem.date}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm"
                    onClick={() => dispatch(removeReservation(reservationItem))}>Remove Reservation</button>
                    </div>
                ))
            )
}
    </>
  );
}