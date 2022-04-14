import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../Header'
import { createStore } from 'redux'
import { Action, State } from '../../../../Types/Types'
import { Provider } from 'react-redux'

const MockStateLoggedOut = { isLoogedIn: false }
const MockStateLoggedIn = { isLoogedIn: true, user: { fullName: 'Albert Einstein' } }

const renderWithReduxProvider = (component = <Header />, initialState = MockStateLoggedOut) => {
    const reducer = () => initialState
    const MockStore = createStore(reducer)
    render(<Provider store={MockStore}>{component}</Provider>)
}
describe('Avatar', () => {
    it('should not render Avatar when logged out', () => {
        renderWithReduxProvider(<Header />, MockStateLoggedOut)
        const divElement = screen.queryByText('AE')
        expect(divElement).not.toBeInTheDocument()
    })
    it('should render Avatar when logged in', () => {
        renderWithReduxProvider(<Header />, MockStateLoggedIn)
        const divElement = screen.queryByText('AE')
        expect(divElement).toBeInTheDocument()
    })
    it('should not render profile card by default', () => {
        renderWithReduxProvider(<Header />, MockStateLoggedIn)
        const divElement = screen.queryByTestId('actionsContainer')
        expect(divElement).not.toBeInTheDocument()
    })
    it('should render profile card when clicked on the avatar', () => {
        renderWithReduxProvider(<Header />, MockStateLoggedIn)
        const avatarContainer = screen.getByTestId('detailsContainer')
        fireEvent.click(avatarContainer)        
        const divElement = screen.getByTestId('actionsContainer')
        expect(divElement).toBeInTheDocument()
    })

})
