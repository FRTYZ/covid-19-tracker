// reducers.ts

import { combineReducers } from 'redux';
import { FETCH_COVID_DATA_SUCCESS, FETCH_COVID_DATA_FAILURE, RESET_STATE } from './actions';

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

const rootReducer = combineReducers({
  covidData: covidDataReducer,
});

export default rootReducer;
