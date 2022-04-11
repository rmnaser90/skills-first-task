import React from 'react'
import {  render, screen, } from '@testing-library/react'
import LeftArrowButton from '../LeftArrowButton'

const handleClick = jest.fn()
describe('left arrow testing', () => {
    it('should render a button', () => {
        render(<LeftArrowButton onClick={handleClick}/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toBeInTheDocument()
    })
    it('should have the color grey when disabled', () => {
        render(<LeftArrowButton onClick={handleClick} disabled={true}/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toHaveStyle('color:grey')
    })
    it('should have cursor set to auto when disabled', () => {
        render(<LeftArrowButton onClick={handleClick} disabled={true}/>)
        const divElement = screen.getByRole('button')
        expect(divElement).toHaveStyle('cursor:auto')
    })
    
   
})