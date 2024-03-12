// Test Npm packages
const { expect, describe, it } = require('@jest/globals');

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import store from '../../redux/store';
import { Provider } from 'react-redux';

import Map from './Map';

describe('Map Page', () => {
    test('Map sayfasının render olup olmadığı', () => {
        render(
            <Router>
                <Provider store={store}>
                    <Map />
                </Provider>
            </Router>
        );
    });
    
    test('Haritanın seçilip seçilmediği test edilmesi', () => {
        // Render the Map component
        const {container} = render(
            <Router>
                <Provider store={store}>
                    <Map />
                </Provider>
            </Router>
        );
    
        // Simulate clicking on a country
        const selectedCountry = 'Turkey'; // Örneğin 'Turkey' olarak seçiliyor
        const element = container.querySelector('#Map') as HTMLElement
        userEvent.click(element); 

        // Check if selectedCountry state is updated correctly
        expect(screen.getByTestId('selected-country')).toHaveTextContent(selectedCountry);
    });
});

