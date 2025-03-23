'use client'
import { FormControl, TextField, Select, MenuItem } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { ReservationItem } from '../../../interfaces';
import { addReservation } from '@/redux/features/cartSlice';

export default function Reservation() {

    const [name,setName] = useState<string>('')
    const [room,setRoom] = useState<string>('')
    const [date,setDate] = useState<Dayjs|null>(null)

    const dispatch = useDispatch<AppDispatch>()
    const makeReservation = () => {
        if(room !== '' && name !== '' && date?.isValid()) {
            const item:ReservationItem = {
                name: name,
                room: room,
                date: dayjs(date).format("YYYY/MM/DD")
            }
            dispatch(addReservation(item))
            window.alert("Your Reservation Is Saved!")
        }
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6 bg-gray-50 min-h-screen">
            <div className="text-2xl font-semibold text-gray-800">New Reservation</div>
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md space-y-4">
                <FormControl variant="standard" className="w-full space-y-4">
                    <TextField variant='standard' name="Name" label="Name" fullWidth onChange={(e)=>{setName(e.target.value)}}/>
                    <div className="text-md text-gray-600">Room</div>
                    <Select variant='standard' name='coworkingspace' id='coworkingspace' className='h-[2.5em] w-full bg-gray-100 rounded-md'
                    value={room} onChange={(e)=>{setRoom(e.target.value)}}>
                        <MenuItem value='room1'>Room 1</MenuItem>
                        <MenuItem value='room2'>Room 2</MenuItem>
                        <MenuItem value='room3'>Room 3</MenuItem>
                    </Select>
                    <DateReserve onDateChange={(value:Dayjs) => {setDate(value)}}/>
                    <button name="Book Co-Working Space" className="w-full rounded-lg bg-sky-600 hover:bg-indigo-600
                    px-4 py-2 shadow-md text-white font-medium transition-all duration-300"
                    onClick={makeReservation}>Book Co-Working Space</button>
                </FormControl>
            </div>
        </main>
    );
}
