import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import setAuthToken from '../../utils/setAuthToken';
const token = localStorage.token;


export const loadUser = createAsyncThunk(
    'user/loadUser',
    async (dispatch) => {
        const response = await fetch(baseUrl + "users", {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })        
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
)

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
        localStorage.setItem('jwtToken', data.token);
        return data;
    }
);

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    currentUser: "",
    errMsg: "",
    isLoading: true,
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
            localStorage.setItem('token', action.payload.token);
            state.token = action.payload.token;
            state.isLoading = false;
            state.errMsg = "";
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        [loginUser.rejected]: (state, action) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isLoading = false;
            state.isAuthenticated = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [loadUser.pending] : (state) => {
            state.isLoading = true
        },
        [loadUser.fulfilled]: (state, action) => {
            state.errMsg = "";
            state.isLoading = false;
            state.isAuthenticated = true;
            state.currentUser = action.payload;
        },
        [loadUser.rejected]: (state, action) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isLoading = false;
            state.isAuthenticated = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => {
    return state.user.currentUser ? state.user.currentUser.user : state.user.currentUser;
};