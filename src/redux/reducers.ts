import { combineReducers } from 'redux';
import { FETCH_COVID_DATA_SUCCESS, FETCH_COVID_DATA_FAILURE, RESET_STATE, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE } from './actions';

const initialDataState = {
  // Başlangıç veri durumu
  data: {},
  loading: false,
  error: null,
};

const covidDataReducer = (state = initialDataState, action: any) => {
  switch (action.type) {
    case FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_COVID_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_STATE:
      return initialDataState; // State'i başlangıç durumuna sıfırla
    default:
      return state;
  }
};

const countriesReducer = (state = initialDataState, action: any) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      return action.payload; // API'den alınan ülkelerin listesi
    case GET_COUNTRIES_FAILURE:
      return state; // Hata durumunda mevcut state'i koru
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  covidData: covidDataReducer,
  countries: countriesReducer,
});

export default rootReducer;
