// Test Npm packages
import { call, put } from 'redux-saga/effects';
const { expect, describe, it } = require('@jest/globals');

import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

// React Router
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { MemoryRouter, Route } from 'react-router-dom';

// Redux
import { fetchCovidDataSaga } from '../../redux/sagas';
import { fetchCovidDataSuccess, fetchCovidData, fetchCovidDataFailure } from '../../redux/actions';
import store from '../../redux/store';
import { Provider } from 'react-redux';

// Helpers
import { Request } from '../../helpers/Request'; // API çağrısını gerçekleştiren yardımcı fonksiyonu içeri aktarın

import Detail from './Detail';

describe('Detail Component', () => {
    it('Detail sayfasının render olup olmadığı', () => {
          render(
            <Router>
              <Provider store={store}>
                  <Detail />
              </Provider>
            </Router>
          );
    });

    it('Country params/ın olup olmadığı test ediliyor', () => {
        const countryParam = 'turkey'; 
        const {container} = render(
          <Provider store={store}>
            <MemoryRouter initialEntries={[`/detail/${countryParam}`]}>
              <Routes>
                <Route path="/detail/:country" element={<Detail />} />
              </Routes>
            </MemoryRouter>
          </Provider>
        );
        
        const eleemnt = container.querySelector('#Ülke')
        expect(eleemnt).toBeInTheDocument();
    });
});

describe('fetchCovidDataSaga', () => {
    const country = 'turkey1'; // Örnek bir ülke adı
    const action = fetchCovidData(country); // Action oluşturun

    it('Api isteğinin doğru şekilde yapılıp yapılmadığı test edilmesi', () => {
        const gen = fetchCovidDataSaga(action);

        expect(gen.next().value).toEqual(call(Request, { method: 'GET', url: `/statistics?country=${country}` })); // API isteği yapılıyor

        const mockData = {};
        expect(gen.next(mockData).value).toEqual(put(fetchCovidDataSuccess(mockData))); // Veri başarıyla alındığında uygun bir action gönderiliyor
    });

    it('Api isteği yapılırken error olup olmadığının test edilmesi', () => {
        const gen = fetchCovidDataSaga(action);

        expect(gen.next().value).toEqual(call(Request, { method: 'GET', url: `/statistics?country=${country}` })); // API isteği yapılıyor

        const mockError = new Error('API error'); // Örnek bir hata nesnesi
        expect(gen.throw(mockError).value).toEqual(put(fetchCovidDataFailure(mockError))); // Hata durumunda uygun bir action gönderiliyor
    });
});