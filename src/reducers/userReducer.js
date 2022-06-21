import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Nayem Islam",
    status: "Codder"
}

createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        updateChange() {

        }
    }
})


