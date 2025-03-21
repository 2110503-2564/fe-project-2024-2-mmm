import Link from "next/link";
import styles from './topmenu.module.css'

export default function TopMenuItem ( { title, pageRef, className } : { title:string, pageRef:string, className?:string } ) {
    return (
        <Link href={pageRef} className={styles.itemcontainer}>
            {title}
        </Link>
    );
}