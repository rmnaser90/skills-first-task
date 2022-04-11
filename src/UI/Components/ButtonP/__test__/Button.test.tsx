import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonP from '../ButtonP'

describe('Avatar', () => {
    const handleClick = jest.fn
    it('should render Button with child text', () => {
        render(<ButtonP onClick={handleClick}>Test Btn</ButtonP>)
        const divElement = screen.getByText(/Test Btn/)
        expect(divElement).toBeInTheDocument()
    })
    it('to have width 90% when not hovered', () => {
        render(<ButtonP onClick={handleClick}>Test Btn</ButtonP>)
        const divElement = screen.getByText(/Test Btn/)
        expect(divElement).toHaveStyle('width:90%')
    })
    it('to have width 95% when  hovered', () => {
        render(<ButtonP onClick={handleClick}>Test Btn</ButtonP>)
        const divElement = screen.getByText(/Test Btn/)
        fireEvent.mouseEnter(divElement)
        expect(divElement).toHaveStyle('width:95%')
    })
    

})
