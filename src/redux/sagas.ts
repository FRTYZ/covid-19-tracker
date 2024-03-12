import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COVID_DATA, fetchCovidDataSuccess, fetchCovidDataFailure,GET_COUNTRIES, getCountriesSuccess, getCountriesFailure } from './actions'; // Actions ve action creators'larınızı ekledik

// Helpers
import { Request } from '../helpers/Request';

export function* fetchCovidDataSaga(action: any): Generator<any, void, any> {
  try {
    const country = action.payload.country; 
    const data = yield call(Request, {
      method: 'GET',
      url: `/statistics?country=${country}`,
    });

    yield put(fetchCovidDataSuccess(data)); // Veri başarılı şekilde alındığında bir action dispatch edicek
  } catch (error) {
    yield put(fetchCovidDataFailure(error)); // Hata oluştuğunda bir action dispatch edicek
  }
}

export function* getCountriesSaga(): Generator<any, void, any> {
  try {
    // Request yardımcı fonksiyonunu kullanarak API isteğini gerçekleştirin
    const data = yield call(Request, {
      method: 'GET',
      url: '/countries',
    });

    yield put(getCountriesSuccess(data)); // Veri başarılı şekilde alındığında bir action dispatch edin
  } catch (error) {
    yield put(getCountriesFailure(error)); // Hata oluştuğunda bir action dispatch edin
  }
}

export default function* rootSaga(): Generator<any, void, any> {
  yield takeLatest(FETCH_COVID_DATA, fetchCovidDataSaga); // FETCH_COVID_DATA action'ı tetiklendiğinde fetchCovidDataSaga çalıştırılacak
  yield takeLatest(GET_COUNTRIES, getCountriesSaga); 
}
