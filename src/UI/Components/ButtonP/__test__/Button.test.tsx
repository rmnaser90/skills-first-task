import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonP from '../ButtonP'

describe('Primary Button testing', () => {
    const handleClick = jest.fn
    it('should render Button with child text', () => {
        render(<ButtonP onClick={handleClick}>Test Btn</ButtonP>)
        const divElement = screen.getByText(/Test Btn/)
        expect(divElement).toBeInTheDocument()
    })
    it('should be resized when hovered', () => {
        render(<ButtonP onClick={handleClick}>Test Btn</ButtonP>)
        const divElement = screen.getByText(/Test Btn/)
        expect(divElement).toHaveStyle('width:90%')
        fireEvent.mouseEnter(divElement)
        expect(divElement).toHaveStyle('width:95%')
        fireEvent.mouseLeave(divElement)
        expect(divElement).toHaveStyle('width:90%')
    })
})
