import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';


export const saveRecording = createAsyncThunk(
    'recording/save',
    async (payload, {dispatch}) => {
        const response = await fetch(baseUrl + 'recording', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        dispatch(setCurrentRecording(data));
    }
)

export const fetchUserRecordings = createAsyncThunk(
    'recording/fetchUsersAll',
    async (userId, {dispatch}) => {
        const response = await fetch(baseUrl + `recording/user/${userId}`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        dispatch(setAllUserRecordings(data));
    }
);

const initialState = {
    recordingsArray: [],
    recording: "",
    loding: true,
    errMsg: ""
};

const recordingSlice = createSlice({
    name: 'recording',
    initialState,
    reducers: {
        setCurrentRecording: (state, action) => {
            return {...state, recording: action.payload}
        },
        setAllUserRecordings: (state, action) => {
            return {...state, recordingsArray: action.payload}
        },
    },
    extraReducers: {
        [saveRecording.pending] : (state) => {
            state.isLoading = true
        },
        [saveRecording.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
        },
        [saveRecording.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }

})

export const recordingReducer = recordingSlice.reducer;

export const { setCurrentRecording, setAllUserRecordings } = recordingSlice.actions;

export const selectRecordingById = (id) => (state) => {
    return state.recordings.recordingsArray.find(recording => recording._id+"" === parseInt(id));
};