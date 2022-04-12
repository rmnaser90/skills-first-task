import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../Input'
import MockForm from '../../../MockComponents/MockForm'
const testText = 'testing'
describe('Carousel testing', () => {
    it('should render all cards passed as children', () => {
        render(
            <MockForm>
                <Input name="firstname" value={testText} placeholder={testText} />
            </MockForm>
        )
        const inputElement: HTMLInputElement = screen.getByPlaceholderText(testText)
        expect(inputElement).toBeInTheDocument()
    })
    it('should change value', () => {
        const testValue = "qweqwe"
        render(
            <MockForm>
                <Input name="firstname"  placeholder={testText} />
            </MockForm>
        )
        const inputElement: HTMLInputElement = screen.getByPlaceholderText(testText)
        fireEvent.change(inputElement, { target: { value: testValue } })
        expect(inputElement.value).toBe(testValue)
    })
    it('should not render error msg when untouched', () => {
        render(
            <MockForm>
                <Input name="firstname" touched={false} error="invalid" value={testText} placeholder={testText} />
            </MockForm>
        )
        const errorDivElement = screen.queryByRole('dialog')
        expect(errorDivElement).not.toBeInTheDocument()
    })
    it('should render error msg when error is not null nad is touched', () => {
        render(
            <MockForm>
                <Input name="firstname" touched={true} error="invalid" value={testText} placeholder={testText} />
            </MockForm>
        )
        const errorDivElement = screen.queryByRole('dialog')
        expect(errorDivElement).toBeInTheDocument()
    })
})
