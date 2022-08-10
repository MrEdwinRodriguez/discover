import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const registerUser = createAsyncThunk(
    'user/register',
    async (payload, {dispatch}) => {
        const response = await fetch(baseUrl + 'users/signup', {
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

export const loginUser = createAsyncThunk(
    'user/login',
    async (payload,{dispatch}) => {
        const response = await fetch(baseUrl + 'users/login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        };
        const data = await response.json();
        return data;
    }
);

const initialState = {
    currentUser: "",
    errMsg: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {...state, currentUser: action.payload}
        }
    },
    extraReducers: {
        [registerUser.pending] : (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [loginUser.pending] : (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.currentUser = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};