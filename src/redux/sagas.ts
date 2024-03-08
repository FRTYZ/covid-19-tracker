import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COVID_DATA, fetchCovidDataSuccess, fetchCovidDataFailure } from './actions'; // Actions ve action creators'larınızı ekledik

// Helpers
import { Request } from '../helpers/Request';

function* fetchCovidDataSaga(action: any): Generator<any, void, any> {
  try {
    const country = action.payload.country; 
    const data = yield call(Request, {
      method: 'GET',
      url: `/statistics?=${country}`,
    });

    yield put(fetchCovidDataSuccess(data)); // Veri başarılı şekilde alındığında bir action dispatch edicek
  } catch (error) {
    yield put(fetchCovidDataFailure(error)); // Hata oluştuğunda bir action dispatch edicek
  }
}

export default function* rootSaga(): Generator<any, void, any> {
  yield takeLatest(FETCH_COVID_DATA, fetchCovidDataSaga); // FETCH_COVID_DATA action'ı tetiklendiğinde fetchCovidDataSaga çalıştırılacak
}
