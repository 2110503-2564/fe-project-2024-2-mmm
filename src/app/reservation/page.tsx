"use client"
import DateReserve from '@/components/DateReserve';

export default function reservation () {
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Booking</div>

            
            <DateReserve />

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                Book Co Working Space
            </button>
        </main>
    );
}
