import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { Link } from '@mui/material';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)
    return (
        <div className={styles.menucontainer}>
        <Image src={'/img/logo.png'} className="h-full w-auto" alt='logo'
        width={0} height={0} sizes='100vh' />
        <TopMenuItem title='home' pageRef='/'/>
        <TopMenuItem title='register' pageRef='/register'/>
        <TopMenuItem title='reserve' pageRef='/reservation'/>
        <TopMenuItem title='reservation list' pageRef='/cart'/>
        {
            session? <Link href="/api/auth/signout"><div className='flex items-center absolute right-0 h-full px-2
            absolte right-0 text-cyan-600 text-sm'>Sign-Out</div></Link>
            :<Link href="/api/auth/signin"><div className='flex items-center absolute right-0 h-full px-2
            absolte right-0 text-cyan-600 text-sm'>Sign-In</div></Link>
        }
    </div>
    );
}
