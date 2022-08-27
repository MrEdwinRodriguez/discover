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

export const createProfile = createAsyncThunk(
    'profile/create',
    async (payload) => {
        const response = await fetch(baseUrl + 'profile/'+payload._id, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const updateProfile = createAsyncThunk(
    'profile/update',
    async (payload) => {
        const response = await fetch(baseUrl + 'profile/'+payload._id, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
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
            state.profile = action.payload;
        },
        [getProfile.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [updateProfile.pending] : (state) => {
            state.isLoading = true
        },
        [updateProfile.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.profile = action.payload;
        },
        [updateProfile.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [createProfile.pending] : (state) => {
            state.isLoading = true
        },
        [createProfile.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.profile = action.payload;
        },
        [createProfile.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
})

export const profileReducer = profileSlice.reducer;

