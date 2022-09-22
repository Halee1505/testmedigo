import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import profileStore from './profileStore'

const rootReducer = combineReducers({
    profileStore: profileStore.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof rootReducer>

export default store
