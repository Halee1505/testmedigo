import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Optional } from '../utils'

const initialState = {}

const profileStore = createSlice({
    name: 'profileStore',
    initialState: initialState as any,
    reducers: {
        fetchProfile: (state, action: PayloadAction<any>) => {
            return action.payload
        },
        updateProfile: (state, action: PayloadAction<Optional<any>>) => {
            return {
                ...state,
                ...action.payload,
            }
        },
    },
})

export default profileStore
