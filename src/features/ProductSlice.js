import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

const ProductSlice = createSlice({
  name: "MyProductSlice",
  initialState,
  reducers: {
    appendProduct: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    removeProduct: (state, action) => {
      // state.value.splice(action.payload, 1);

      state.value.forEach((product, index) => {
        if (product.id === action.payload) {
          state.value.splice(index, 1);
        }
      });
    },

  }
});

export const { appendProduct, removeProduct } = ProductSlice.actions
export default ProductSlice.reducer