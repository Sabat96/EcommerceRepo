import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

const ProductSlice = createSlice({
  name: "MyProductSlice",
  initialState,
  reducers: {
    
    appendProduct: (state, action) => {
      // console.log(action.payload);
      state.value.push(action.payload);
    },
    removeProduct: (state, action) => {
      // state.value.splice(action.payload, 1);

      state.value.forEach((product, index) => {
        if (product._id === action.payload) {
          state.value.splice(index, 1);
        }
      });
    },

    incrementQuantity: (state, action) => {
      console.log(action.payload);

      state.value.forEach((product, index) => {
        if (product._id === action.payload) {

          state.value[index].count++;

        }
      });
    },
    decrementQuantity: (state, action) => {
      console.log(action.payload);

      state.value.forEach((product, index) => {
        if (product._id === action.payload &&  state.value[index].count > 1) {
          
          state.value[index].count--;

        }
      });
    },

    // incrementQuantity: (state, action) => {
    //   let itemIndex = state.cartItems.findIndex(
    //     (product) => product._id === action.payload
    //   );
    //   state.cartItems[itemIndex].count++;
    //   localStorage.setItem("cart", JSON.stringify(state.cartItems));
    // },

    

  }
});

export const { appendProduct, removeProduct, incrementQuantity, decrementQuantity } = ProductSlice.actions
export default ProductSlice.reducer