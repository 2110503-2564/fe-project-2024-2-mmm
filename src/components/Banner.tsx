import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image 
                src={'/img/cover.jpg'}
                alt='cover' 
                fill={true} 
                priority
                style={{ objectFit: 'cover' }} 
            />
            <div className={styles.bannerText}>
                <h1>Where Productivity Meets Comfort</h1>
                <h3>Flexible co-working spaces designed for focus, collaboration and growth</h3>
            </div>
        </div>
    );
}
