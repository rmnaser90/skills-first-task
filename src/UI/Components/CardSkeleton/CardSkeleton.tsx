import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeletonStyled from './CardSkeletonStyled'

const CardSkeleton:React.FC = () => {
  return (
      <CardSkeletonStyled>
          <Skeleton className='bookSkeleton'/>
          <div className="titleContainer">
          <Skeleton className='titleSkeleton'/>
          <Skeleton className='titleSkeleton second'/>
          </div>
      </CardSkeletonStyled>
  )
}

export default CardSkeleton