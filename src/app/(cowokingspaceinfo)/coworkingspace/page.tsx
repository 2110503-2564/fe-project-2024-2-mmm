import getCoworkingspaces from "@/libs/getCoworkingspaces"
import CWSCatalog from "@/components/CWSCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default function Coworkingspace() {
    const cws = getCoworkingspaces()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium" >View Our Rooms</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <CWSCatalog CWSJson={cws}/>
            </Suspense>
        </main>
    )
}