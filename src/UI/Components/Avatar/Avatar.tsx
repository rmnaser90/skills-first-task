import React from 'react'
import AvatarStyled from './AvatarStyled'
type Props = {
    name: string
    diameter?: string
}

const getIntials: (name: string) => string = function (name) {
    const [first, last] = name.split(' ')
    const intials = first[0] + (last ? last[0] : '')
    return intials
}
const Avatar: React.FC<Props> = ({ name, diameter = '50px' }) => {
    const intials = getIntials(name)

    return <AvatarStyled role="paragraph" className='avatar' diameter={diameter}>{intials.toUpperCase()}</AvatarStyled>
}

export default Avatar
