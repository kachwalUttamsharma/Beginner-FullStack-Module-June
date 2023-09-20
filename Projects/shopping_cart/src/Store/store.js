import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    cart: cartReducer,
    products: productReducer
})
const persistConfig = {
    key: 'cartInfo-key',
    storage
}

const persistreducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistreducer,
})

export default store
