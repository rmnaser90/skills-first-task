import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import store from './StoreManager/store'
import Avatar from './UI/Components/Avatar/Avatar'
const MockApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
test('renders learn react link', () => {
    render(<MockApp />)
    const linkElement = screen.getByRole('button')
    expect(linkElement.textContent).toBe('Get started')
})
