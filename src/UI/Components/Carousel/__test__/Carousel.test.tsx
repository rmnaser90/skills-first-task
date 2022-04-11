import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { getMockCards } from '../../../MockComponents/MockBooks'
import Carousel from '../Carousel'

const { cards, books } = getMockCards(20)
describe('Carousel testing', () => {
    it('should render all cards passed as children', () => {
        render(<Carousel>{cards}</Carousel>)
        const divElements = screen.getAllByRole('grid')
        expect(divElements.length).toBe(books.length)
    })
    it('should render two buttons', () => {
        render(<Carousel>{cards}</Carousel>)
        const buttonElements = screen.getAllByRole('button')
        expect(buttonElements.length).toBeGreaterThanOrEqual(2)
    })
    it.skip("when clicking on the right arrow the first elemnt shouldn't be visible", () => {
        render(<Carousel>{cards}</Carousel>)
        const divElement = screen.getByText(books[0].title || '')
        const buttonElements = screen.getAllByRole('button')
        fireEvent.click(buttonElements[1])
        expect(divElement).not.toBeVisible()
    })
})
