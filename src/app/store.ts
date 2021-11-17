import {Action, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit'
import {authApi} from "../api/auth-api";


const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
});

export type RootStateType = ReturnType<typeof rootReducer>
export type ThunkType = ThunkDispatch<RootStateType, void, Action>