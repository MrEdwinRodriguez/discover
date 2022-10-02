import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';


export const saveRecording = createAsyncThunk(
    'recording/save',
    async (payload, {dispatch}) => {
        let formData = new FormData()
        formData.append('track', payload.blob, payload.name + ".wav");
        const response = await fetch(baseUrl + 'recording', {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
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
        return data;
    }
);

export const fetchRecoringById = createAsyncThunk(
    'recording/fetchRecordingById',
    async (userId, {dispatch}) => {
        const response = await fetch(baseUrl + `recording/${userId}`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
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
    reducers: {},
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
        },
        [fetchRecoringById.pending] : (state) => {
            state.isLoading = true
        },
        [fetchRecoringById.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.recording = action.payload;
        },
        [fetchRecoringById.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [fetchUserRecordings.pending] : (state) => {
            state.isLoading = true
        },
        [fetchUserRecordings.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = "";
            state.recordingsArray = action.payload;
        },
        [fetchUserRecordings.rejected]: (state, action) => {
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