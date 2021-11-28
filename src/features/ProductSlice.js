import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const ProductSlice = createSlice({
    name: "MyProductSlice",
    initialState,
    reducers: {
        appendTodo: (state, action) => {
            state.value.push(action.payload);
          },
          laybaTodo: (state, action) => {
            state.value.splice(action.payload, 1);
          },
    
    }
});

export const {appendTodo, laybaTodo} = ProductSlice.actions
export default ProductSlice.reducer