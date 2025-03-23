import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    cwsItems: ReservationItem[]
}
const initialState: CartState = { cwsItems: [] }

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            state.cwsItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItems = state.cwsItems.filter(obj => {
                return ((obj.name !== action.payload.name)
                || (obj.room !== action.payload.room)
                || (obj.date !== action.payload.date));
            })
            state.cwsItems = remainItems
        }
    }
})
export const { addReservation,removeReservation} = cartSlice.actions
export default cartSlice.reducer