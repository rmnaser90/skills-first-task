import React from 'react'

interface Props{
    children:string
}

const Paragraph: React.FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Paragraph