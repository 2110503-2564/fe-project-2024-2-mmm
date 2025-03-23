'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const {data:session} = useSession()
    console.log(session?.user.token)
    return (
        <div className="block p-5 m-0 h-[50vh] w-[100vw] relative" onClick={()=>{ setIndex(index+1) }}>
            <Image 
                src={covers[index%3]}
                alt='cover' 
                fill={true} 
                priority
                style={{ objectFit: 'cover' }} 
            />
            <div className="relative text-center top-[60px] z-20">
                <h1 className="text-4xl font-serif pb-3">Where Productivity Meets Comfort</h1>
                <h3 className="text-xl font-serif">Flexible co-working spaces designed for focus, collaboration and growth</h3>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
        font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
        hover:bg-cyan-600 hover:text-white hover:border-transparent'
        onClick={(e)=> { e.stopPropagation(); router.push('/coworkingspace') }}>Select Your Space NOW</button>
        </div>
    );
}
