"use client"

import { useRef } from "react"
import { useMouseOverZoom } from "@/hooks"


export default function Page() {
    const source = useRef(null)
    const target = useRef(null)
    const cursor = useRef(null)

    useMouseOverZoom(source, target, cursor)


    return (
        <div className="w-screen h-screen bg-neutral-400">
            <div className="flex">
                <div className="w-1/3 h-[700px] relative">
                    <img ref={source} src='/assets/images/img-1.jpg' className="cursor-crosshair h-full" />
                    <div ref={cursor} className="border border-sky-500 absolute z-10 pointer-events-none"></div>
                </div>
                <div className="w-1/3 h-[700px] w-max-1/3">
                    <canvas ref={target} className="w-full h-full"></canvas>
                </div>
            </div>
        </div>
    )
}