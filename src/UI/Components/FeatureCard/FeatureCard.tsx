import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import FeatureCardStyled from './FeatureCardStyled'

type Props = {
    children: string
}
const FeatureCard: React.FC <Props>= ({children}) => {
    return (
        <FeatureCardStyled>
            <Paragraph>{children}</Paragraph>
        </FeatureCardStyled>
    )
}

export default FeatureCard
