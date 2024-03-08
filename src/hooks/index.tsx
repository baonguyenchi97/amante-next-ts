import React, { useEffect, useState } from "react"

function useMouse (
    ref: React.RefObject<HTMLElement>
){
    const [mouse, setMouse] = useState({ x: 0, y: 0, isActive: false })
    
    useEffect(() => {
        if (ref.current) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = ref.current?.getBoundingClientRect()

                if (rect) {
                    setMouse({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                        isActive: true
                    })
                }
            }

            const handleMouseOut = (e: MouseEvent) => {
                setMouse({
                    x: 0,
                    y: 0,
                    isActive: false
                })
            }

            ref.current.addEventListener('mousemove', handleMouseMove)
            ref.current.addEventListener('mouseout', handleMouseOut)
            return () => {
                ref.current?.removeEventListener('mousemove', handleMouseMove)
                ref.current?.removeEventListener('mouseout', handleMouseOut)
            }
        }
    })

    return mouse
}

export function useMouseOverZoom (
    source: React.RefObject<HTMLImageElement>,
    target: React.RefObject<HTMLCanvasElement>,
    cursor: React.RefObject<HTMLElement>,
    radius: number = 100
) {
    const { x, y, isActive } = useMouse(source)

    const zoomBounds = {
        left: x - radius,
        top: y - radius,
        width: radius * 2,
        height: radius * 2
    }

    useEffect(() => {
        if (cursor.current) {
            const { left, top, width, height } = zoomBounds
            cursor.current.style.left = `${left}px`
            cursor.current.style.top = `${top}px`
            cursor.current.style.width = `${width}px`
            cursor.current.style.height = `${height}px`,
            cursor.current.style.display = isActive ? 'block' : 'none'
        }

        console.log(cursor.current)
    }, [zoomBounds])

    useEffect(() => {
        if (source.current && target.current) {
            const { left, top, width, height } = zoomBounds
            const ctx = target.current.getContext("2d")

            // const imageRatio = 1
            const imageRatio = source.current.naturalWidth / source.current.width

            if (ctx && isActive) {
                ctx.drawImage(
                    source.current,
                    left * imageRatio,
                    top * imageRatio,
                    width * imageRatio,
                    height * imageRatio,
                    0,
                    0,
                    target.current.width,
                    target.current.height
                )
            }
        }
    }, [zoomBounds])
}