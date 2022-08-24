import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
const BLOCKS = [{_id: 1, name: "Michele", date: "Jan 10, 2022"}, {_id: 2, name: "Tim", date: "Jan 11, 2022"}, {_id: 3, name: "Matt", date: "Jan 12, 2022"}]

export const fetchBlocks = createAsyncThunk(
    'timeline/fetchBlocks',
    async () => {
        const response = await fetch(baseUrl + 'recordings');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const createPost = createAsyncThunk(
    'timeline/createPost',
    async (payload) => {
        const response = await fetch(baseUrl + 'post', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        if(!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status); 
        };
        const data = await response.json();
        return data;
    }
);

export const editPost = createAsyncThunk(
    'timeline/editPost',
    async (payload) => {
        const response = await fetch(baseUrl + 'post', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        if(!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status); 
        };
        const data = await response.json();
        return data;
    }
);

export const deletePost = createAsyncThunk(
    'timeline/deletePost',
    async(payload) => {
        const response = await fetch(baseUrl + 'post', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        if(!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status); 
        };
        const data = await response.json();
        return data;
    }
);

const initialState = {
    timelineArray: BLOCKS,
    isLoading: true,
    errMsg: ""
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBlocks.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBlocks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
        },
        [fetchBlocks.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        },
        [createPost.pending]: (state) => {
            state.isLoading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.timelineArray.unshift(action.payload)
        },
        [createPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Failed to post comment.';
        },
        [editPost.pending]: (state) => {
            state.isLoading = true;
        },
        [editPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            const index = state.timelineArray.findIndex(post => {
                return post._id == action.payload._id;
            })
            if (index >= 0) state.timelineArray[index] = action.payload;
        },
        [editPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Failed to post comment.';
        },
        [deletePost.pending]: (state) => {
            state.isLoading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.timelineArray = state.timelineArray.filter(post => post._id != action.payload._id);

        },
        [deletePost.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Failed to post comment.';
        }
    }
});

export const timelineReducer = timelineSlice.reducer;

export const selectAllBlocks = () => {
    return BLOCKS;
};

export const selectBlockById = (id) => {
    return BLOCKS.find(block => block._id === parseInt(id));
};