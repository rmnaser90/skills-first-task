import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '../Avatar'

describe('Avatar', () => {
    it('should render Avatar', () => {
        render(<Avatar name="albert einstein" />)
        const divElement = screen.getByText('AE')
        expect(divElement).toBeInTheDocument()
    })

    it('should have default width equal to 50px', () => {
        render(<Avatar name="albert einstein" />)
        const divElement = screen.getByRole('paragraph')
        expect(divElement).toHaveStyle('width:50px')
    })

    it('should have width equal to the passed diameter prop', () => {
        render(<Avatar name="albert einstein" diameter="100px" />)
        const divElement = screen.getByText('AE')
        expect(divElement).toHaveStyle('width:100px')
    })
    it('should have the passed name initals as text', () => {
        render(<Avatar name="albert einstein" diameter="100px" />)
        const divElement = screen.getByText('AE')
        expect(divElement).toHaveClass('avatar')
    })
})
