import Image from "next/image"
import getCoworkingspace from "@/libs/getCoworkingspace"
import Link from "next/link";

export default async function CoworkingspaceDetailPage ({params}:{params: {rid:string}}) {
    const cwsDetail = await getCoworkingspace(params.rid)
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{cwsDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={cwsDetail.data.picture}
                alt ='Co-Working Space Picture'
                width={0} height={0} sizes="100vw"
                className='w-[30%] bg-black rounded-lg'/>
            <div className='tex-md mx-5 text-left'>
                <div>Address: {cwsDetail.data.address}</div>
                <div>District: {cwsDetail.data.district}</div>
                <div>Province: {cwsDetail.data.province}</div>
                <div>Tel: {cwsDetail.data.tel}</div>
                <div>Open-Time: {cwsDetail.data.openTime}</div>
                <div>Close-Time: {cwsDetail.data.closeTime}</div>
            </div>
            </div>
        </main>
  );
}
