import { configureStore, createSlice, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { countryDataState } from './store-interface';
// Slices

// countrySlice
const countrySlice = createSlice({
    name: 'countryData',
    initialState: {} as countryDataState,
    reducers: {
      setCountryData: (state, action) => {
        state.countryData = { ...state.countryData, ...action.payload}
      },
    },
});

export const { setCountryData } = countrySlice.actions;

// rootReducer
const rootReducer = {
    countryData: countrySlice.reducer
};

// Middleware
const saveToLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);

    localStorage.setItem('countryData', JSON.stringify(store.getState().countryData));
    return result;
};

// Store
const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    // Local Storage'dan veriyi yükleme
    countryData: JSON.parse(localStorage.getItem('countryData') || '{}'),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
});

export default store;

export function removeAllData(){
    localStorage.clear();
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




