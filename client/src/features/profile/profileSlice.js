import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../shared/baseUrl';

export const getProfile = createAsyncThunk(
    'profile/fetch',
    async (payload) => {
        const response = await fetch(baseUrl + 'profile/'+payload._id, {
            method: 'get',
            headers: {'Content-Type':'application/json'}
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    profile: "",
    errMsg: ""
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: {
        [getProfile.pending] : (state) => {
            state.isLoading = true
        },
        [getProfile.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
        },
        [getProfile.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})

export const profileReducer = profileSlice.reducer;

