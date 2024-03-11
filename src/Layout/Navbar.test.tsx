// Test Npm packages
import { call, put } from 'redux-saga/effects';
import '@testing-library/jest-dom'
const { expect, describe, it } = require('@jest/globals');

// React Router
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Redux
import { getCountriesSaga } from '../redux/sagas';
import { getCountriesSuccess, getCountriesFailure } from '../redux/actions';
import store from '../redux/store';
import { Provider } from 'react-redux';

// Helpers
import { Request } from '../helpers/Request'; // API çağrısını gerçekleştiren yardımcı fonksiyonu içeri aktarın

// Component
import Navbar from './Navbar';

describe('getCountriesSaga', () => {
  test('countries verisinin başarılı bir şekilde alındığı', () => {
    const gen = getCountriesSaga();

    expect(gen.next().value).toEqual(call(Request, { method: 'GET', url: '/countries' })); // API isteği yapılıyor

    const mockCountriesData = ['Turkey', 'USA', 'Russia']; // API'den gelecek olan ülkelerin örneği
    expect(gen.next(mockCountriesData).value).toEqual(put(getCountriesSuccess(mockCountriesData))); // Verinin başarıyla alındığına dair bir action gönderiliyor
  });

  test('countries verisinin alınmasında hata oluştuğu', () => {
    const gen = getCountriesSaga();

    expect(gen.next().value).toEqual(call(Request, { method: 'GET', url: '/countries' })); // API isteği yapılıyor

    const mockError = new Error('API error'); // Örnek bir hata
    expect(gen.throw(mockError).value).toEqual(put(getCountriesFailure(mockError))); // Hata durumunda uygun bir action gönderiliyor
  });
});

describe('Navbar Component', () => {
    test('Select\'in render edilip edilmediğini kontrol etme', () => {
        render(
            <Router>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </Router>
        );
    
        expect(screen.getByPlaceholderText('Ülke seçebilirsiniz')).toBeInTheDocument();
  
    });
    test('setCountries useState boş olup olmadığını kontrol etme', () => {
        const { getByPlaceholderText } = render(
            <Router>
                <Provider store={store}>
                <Navbar />
                </Provider>
            </Router>
        );
        
        const selectElement = getByPlaceholderText('Ülke seçebilirsiniz') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();

        // Select elementine bir değer seçin
        fireEvent.change(selectElement, { target: { value: 'Turkey' } });
    
        // setCountries state'inin güncellendiğini ve dolu olduğunu kontrol edin
        expect(selectElement.value).toBe('Turkey');
    });
    test('Select\'in seçilip seçilmediğini kontrol etme', () => {
        const { getByPlaceholderText } = render(
            <Router>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </Router>
        );
        
        const selectElement = getByPlaceholderText('Ülke seçebilirsiniz') as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();

        // Select elementine bir değer seçin
        fireEvent.change(selectElement, { target: { value: 'Turkey' } });

        expect(selectElement).toHaveValue('Turkey');
    });
});