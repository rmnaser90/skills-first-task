import React from 'react'
import Title from '../../Components/Title/Title'
import Paragraph from '../../Components/Paragraph/Paragraph'
import HeaderStyled from './HeaderStyled'
import ButtonP from '../../Components/ButtonP/ButtonP'

const HeaderSection: React.FC = () => {
    return (
        <HeaderStyled>
            <Title>Netboox</Title>
            <div className='paraContainer'>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id possimus adipisci impedit expedita
                    ea nostrum consectetur accusamus sed optio aliquid fugiat a hic nam. Perspiciatis ad sint officia
                    explicabo!
                </Paragraph>
            </div>
            <div className="actionContainer">

            </div>
        </HeaderStyled>
    )
}

export default HeaderSection
