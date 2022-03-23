import React, { ReactNode, useEffect, useRef } from 'react'

type Props = {
    children?: ReactNode
    shouldShow?: boolean
}
const CarouserlItem: React.FC<Props> = ({ children, shouldShow }) => {
    const ref = useRef<HTMLDivElement>(null)
    const currentItem = ref.current

    useEffect(() => {
        if (shouldShow && currentItem) {
            currentItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        }
    }, [shouldShow])
    return (
        <div ref={ref} style={{ transition : '0.4s' }}>
            {children}
        </div>
    )
}

export default CarouserlItem
