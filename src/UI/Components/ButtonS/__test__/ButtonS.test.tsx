import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonS from '../ButtonS'

describe('Secondary Button testing', () => {
    const handleClick = (name: string) => ({})
    const text = 'Filter'
    it('should render Button with child text', () => {
        render(<ButtonS name={text} onClick={handleClick} />)
        const divElement = screen.getByText(text)
        expect(divElement).toBeInTheDocument()
    })

    it('should not have img visible when showIcon is false/undefined', () => {
        render(<ButtonS name={text} onClick={handleClick} />)
        const divElement = screen.queryByRole('img')
        expect(divElement).not.toBeInTheDocument()
    })
    it('should have grid template to "1fr" when showIcon is false/undefined', () => {
        render(<ButtonS name={text} onClick={handleClick} />)
        const divElement = screen.getByText(text)
        expect(divElement).toHaveStyle('grid-template-columns:1fr')
    })
    it('should have img visible when showIcon is true', () => {
        render(<ButtonS name={text} onClick={handleClick} showIcon/>)
        const divElement = screen.queryByRole('img')
        expect(divElement).toBeInTheDocument()
    })
    it('should have grid template to "1fr 2fr" when showIcon is true', () => {
        render(<ButtonS name={text} onClick={handleClick} showIcon />)
        const divElement = screen.getByText(text)
        expect(divElement).toHaveStyle('grid-template-columns:1fr 2fr')
    })
})
