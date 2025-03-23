import Link from 'next/link'

export default function TopMenuItem ({title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link className="text-base w-[120px] text-center my-auto text-gray-500 content-end" href={pageRef}>
        {title}
        </Link>
    );
}