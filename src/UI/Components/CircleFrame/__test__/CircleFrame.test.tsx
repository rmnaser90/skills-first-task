import React from 'react'
import {  render, screen, } from '@testing-library/react'
import CircleFrame from '../CircleFrame'

describe('CircleFrame testing', () => {
    it('should render the circle with default height = 256px', () => {
        render(<CircleFrame />)
        const divElement = screen.getByRole('grid')
        expect(divElement).toHaveStyle('height:256px')
    })
    it('should render the circle with default width = 256px', () => {
        render(<CircleFrame />)
        const divElement = screen.getByRole('grid')
        expect(divElement).toHaveStyle('width:256px')
    })
    it('should render the circle with width as passed via props', () => {
        render(<CircleFrame width='100px' />)
        const divElement = screen.getByRole('grid')
        expect(divElement).toHaveStyle('width:100px')
    })
    it('should render the circle with height as passed via props', () => {
        render(<CircleFrame height='100px' />)
        const divElement = screen.getByRole('grid')
        expect(divElement).toHaveStyle('height:100px')
    })

   
})
