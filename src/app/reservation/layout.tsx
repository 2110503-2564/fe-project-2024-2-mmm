import ReservationMenu from "@/app/reservation/ReservationMenu"; 
import styles from './booking.module.css'

export default function booking( {children} : {children:React.ReactNode}) {
    return (
        <div className={styles.sectionlayout}>
            <ReservationMenu/>
            {children}
        </div> 
    );
}