import Link from "next/link";
import Card from "./Card";

export default async function CWSCatalog({CWSJson}:{CWSJson:Object}) {
    const CWSJsonReady = await CWSJson
    return (
        <>
            Explore {CWSJsonReady.count} rooms in our catalog
            <div className="m-20 flex flex-row content-around justify-around flex-wrap p-10">
                {
                    CWSJsonReady.data.map((cwsItem:Object) => (
                        <Link href={`coworkingspace/${cwsItem.id}`} className="w-1/5">
                            <Card coworkingspaceName={cwsItem.name} imgSrc={cwsItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}