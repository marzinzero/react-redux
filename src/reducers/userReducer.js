import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
    post: [],
    loadding: false,
    status: "Codder"
}

//create async thunk

export const userFatchData = createAsyncThunk(
    'user/userFatchData',
    async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        return data;
    }
);



//end create async thunk...

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        // updateChange(state, action) {
        //     state.name.push(action.payload);
        // }
    },
    extraReducers: {
        [userFatchData.pending]: (state, action) => {
            state.loadding = true
        },
        [userFatchData.fulfilled]: (state, { payload }) => {
            state.loadding = false
            state.post = payload


        },
        [userFatchData.rejected]: (state, action) => {
            state.loadding = false
        }
    }
})


export const { updateChange } = userReducer.actions;
export default userReducer.reducer;


