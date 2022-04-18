import React, { ReactNode, useEffect, useRef } from 'react'

type Props = {
    children?: ReactNode
    shouldShow?: boolean
    testId?:string
}
const CarouserlItem: React.FC<Props> = ({ children, shouldShow,testId }) => {
    const ref = useRef<HTMLDivElement>(null)
    const currentItem = ref.current
    const scrollOptions:ScrollIntoViewOptions = { behavior: 'smooth', block: 'nearest', inline: 'start' }

    useEffect(() => {
        if (shouldShow && currentItem) {
            currentItem.scrollIntoView(scrollOptions)
        }
    }, [shouldShow])


    return (
        <div data-testid={testId} ref={ref} style={{ transition : '0.4s' }}>
            {children}
        </div>
    )
}

export default CarouserlItem
