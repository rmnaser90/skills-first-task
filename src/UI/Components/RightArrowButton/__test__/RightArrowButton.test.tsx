
import React from 'react'
import {  render, screen, } from '@testing-library/react'
import RightArrowButton from '../RightArrowButton'

const handleClick = jest.fn()
describe('Right arrow testing', () => {
    it('should render a button', () => {
        render(<RightArrowButton onClick={handleClick}/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toBeInTheDocument()
    })
    it('should have the color grey when disabled', () => {
        render(<RightArrowButton onClick={handleClick} disabled/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toHaveStyle('color:grey')
    })
    it('should have cursor set to auto when disabled', () => {
        render(<RightArrowButton onClick={handleClick} disabled/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toHaveStyle('cursor:auto')
    })
    
   
})

