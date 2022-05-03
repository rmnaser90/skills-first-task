import React, { Children, ReactNode, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import LeftArrowButton from '../LeftArrowButton/LeftArrowButton'
import RightArrowButton from '../RightArrowButton/RightArrowButton'
import CarouselStyled from './CarouselStyled'
import CarouselItem from './CarouserlItem'
type Props = {
    className?: string
    children?: ReactNode
    hideNav?:boolean
}
const Carousel: React.FC<Props> = ({ className, children,hideNav }) => {
    const [currentItem, setCurrentItem] = useState<number>(0)
    const length = Children.count(children)
    const childrenArr = Children.toArray(children)

    const increment = function () {
        setCurrentItem(currentItem + 1)
    }
    const decrement = function () {
        setCurrentItem(currentItem - 1)
    }
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return (
        <CarouselStyled className={className}>
            <div className="itemsContainer">
                {childrenArr.map((child, i) => (
                    <CarouselItem key={i} testId={'carouselItem' + i} shouldShow={currentItem == i}>
                        {child}
                    </CarouselItem>
                ))}
                <CarouselItem shouldShow={false}>
                    <div className="extra" />
                </CarouselItem>
            </div>
            {(isDesktop && !hideNav) && (
                <div className="navbtns">
                    <LeftArrowButton onClick={decrement} disabled={currentItem === 0} />
                    <RightArrowButton onClick={increment} disabled={currentItem === length - 1} />
                </div>
            )}
        </CarouselStyled>
    )
}

export default Carousel
