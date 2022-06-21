import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const initialState = {
    name: "Nayem Islam",
    status: "Codder"
}

const rootReducer = createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_NAME', (state, action) => {
        state.name = action.payload
    })
})

// const rootReducer = (state = initialState, action) => {

//     const type = action.type;
//     // const payload = action.payload;

//     switch (type) {
//         case 'UPDATE_NAME':
//             return {
//                 ...state,
//                 name: action.payload

//             }
//             break;
//     }
//     return state;
// }

const store = configureStore({ reducer: rootReducer })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
