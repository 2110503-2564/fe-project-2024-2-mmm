'use client'
import InteractiveCard from './InteractiveCard';
import Image from 'next/image'
import { useState } from 'react';
import { Rating } from '@mui/material';

export default function Card ({coworkingspaceName, imgSrc, onRating}:{coworkingspaceName:string, imgSrc:string, onRating?:Function}) {
    const [value, setValue] = useState<number|null> (0) ;

    return (
        <InteractiveCard contentName={coworkingspaceName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Co-Working Space Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] p-[10px] content-center text-left font-sans text-xl'>
                <h4>{coworkingspaceName}</h4>
                {
                    onRating? <Rating name={coworkingspaceName + " Rating"} id={coworkingspaceName + " Rating"} data-testid={coworkingspaceName + " Rating"}
                    value={value} onChange={(e, newVal) => {e.stopPropagation; setValue(newVal); onRating(coworkingspaceName, newVal);}}
                    onClick={(e) => {e.stopPropagation()}}/>:''
                }
            </div>
        </InteractiveCard>
    );
}