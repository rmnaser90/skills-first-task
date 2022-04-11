import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../Card'
import { MockBookNoImg, MockBookWithImg } from '../../../MockComponents/MockBooks'

const handleClick = jest.fn
const className = "testing"
describe('Card testing', () => {
    it('should render the card with title and text', () => {
        render(<Card onClick={handleClick} item={MockBookNoImg} />)
        const titleElement = screen.getByText(MockBookNoImg.title || '')
        const textElement = screen.getByText(MockBookNoImg.text || '')
        expect(titleElement).toBeInTheDocument()
        expect(textElement).toBeInTheDocument()
    })
    it('should not render an img when no url in the book item', () => {
        render(<Card onClick={handleClick} item={MockBookNoImg} />)
        const imgElement = screen.queryByRole('img')
        expect(imgElement).not.toBeInTheDocument()
    })
    it('should render the img when url is in the book item', () => {
        render(<Card onClick={handleClick} item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('img')
        expect(imgElement).toBeInTheDocument()
    })
    it('should have default width equal to 87.2% ', () => {
        render(<Card onClick={handleClick} item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('grid')
        expect(imgElement).toHaveStyle('width:87.2%')
    })
    it('should have default heigth equal to 52.22vh ', () => {
        render(<Card onClick={handleClick} item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('grid')
        expect(imgElement).toHaveStyle('height:52.22vh')
    })
    it('should have heigth equal to the passed height prop ', () => {
        render(<Card onClick={handleClick} height="500px" item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('grid')
        expect(imgElement).toHaveStyle('height:500px')
    })
    it('should have width equal to the passed width prop ', () => {
        render(<Card onClick={handleClick} width="500px" item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('grid')
        expect(imgElement).toHaveStyle('width:500px')
    })
    
    it('should have the passed className prop as a class', () => {
        render(<Card onClick={handleClick} className={className} item={MockBookWithImg} />)
        const imgElement = screen.queryByRole('grid')
        expect(imgElement).toHaveClass(className)
    })
   
})
