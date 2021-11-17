import {Action, combineReducers, configureStore, ThunkDispatch} from '@reduxjs/toolkit'


const rootReducer = combineReducers({

});

export const store =configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>getDefaultMiddleware().concat()
});

export type RootStateType = ReturnType<typeof rootReducer>
export type ThunkType = ThunkDispatch<RootStateType, void, Action>