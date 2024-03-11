import { call, put } from 'redux-saga/effects';
import { getCountriesSaga } from '../redux/sagas';
import { getCountriesSuccess, getCountriesFailure, GET_COUNTRIES_SUCCESS } from '../redux/actions';
import { Request } from '../helpers/Request'; // API çağrısını gerçekleştiren yardımcı fonksiyonu içeri aktarın
import Navbar from './Navbar';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import '@testing-library/jest-dom'


const { expect, describe, it } = require('@jest/globals');

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
        const { getByPlaceholderText } = render(
            <Router>
                <Provider store={store}>
                <Navbar />
                </Provider>
            </Router>
        );
    
        expect(getByPlaceholderText("Ülke seçebilirsiniz")).toBeInTheDocument();
  
    });
  });