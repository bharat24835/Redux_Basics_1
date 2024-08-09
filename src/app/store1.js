import { configureStore , combineReducers } from "@reduxjs/toolkit";
import  counterReducer from '../feature/counterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import multiplyReducer from '../feature/multiplySlice'


const persistConfig = {
    key: 'root',       // Key for the persisted state in storage
    storage,           // The storage engine to use (e.g., localStorage)
   
};
const reducer = combineReducers({
    counter  : counterReducer,
    multiply : multiplyReducer
});
const persistedReducer = persistReducer(persistConfig,reducer );



const store = configureStore({
reducer : persistedReducer,
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false, // Disables checks to allow non-serializable values in state (like Promises)
    }),
});

const persistor = persistStore(store);
export { store, persistor };
