import InteractiveCard from './InteractiveCard';
import Image from 'next/image';

export default function Card({ venueName, imgSrc} : { venueName:string, imgSrc:string}) {
    return (
        <InteractiveCard contentName={ venueName }>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt='Product Picture'
                    fill={true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className="w-full h-[30%] p-[10px]">{venueName}</div>
        </InteractiveCard>
    );
}