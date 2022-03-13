import React from 'react'
import HeaderSectionStyle from './HeaderSectionStyle'
import Title from '../../Components/Title/Title'
import Paragraph from '../../Components/Paragraph/Paragraph'

const HeaderSection: React.FC = () => {
    const { container,paragraphContainer } = HeaderSectionStyle
    return (
        <div style={{ ...container }}>
            <Title>BasketBall</Title>
            <div style={{...paragraphContainer}}>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id possimus adipisci impedit expedita
                    ea nostrum consectetur accusamus sed optio aliquid fugiat a hic nam. Perspiciatis ad sint officia
                    explicabo!
                </Paragraph>
            </div>
        </div>
    )
}

export default HeaderSection
