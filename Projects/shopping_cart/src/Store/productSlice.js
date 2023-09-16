import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
};
const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
  },
//   reducers: {
//     setProducts(state, action) {
//       state.data = action.payload;
//     },
//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
    extraReducers: (builder) => {
      builder.addCase(fetchProducts.pending, (state) => {
          state.status = STATUSES.LOADING;
      }).addCase(fetchProducts.fulfilled, (state, action) => {
          state.data = action.payload;
          state.status = STATUSES.SUCCESS;
      }).addCase(fetchProducts.rejected, (state) => {
          state.status = STATUSES.ERROR;
      })
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export const fetchProducts = () => {
//   return async function fetchProductsThunk(dispatch, getState) {
//     const { products } = getState();
//     if (products.status === STATUSES.SUCCESS && products.data.length > 0) {
//       return;
//     } else {
//       dispatch(setStatus(STATUSES.LOADING));
//       try {
//         const result = await axios.get("https://fakestoreapi.com/products");
//         dispatch(setProducts(result.data));
//         dispatch(setStatus(STATUSES.SUCCESS));
//       } catch (error) {
//         dispatch(setStatus(STATUSES.ERROR));
//       }
//     }
//   };
// };

export const fetchProducts = createAsyncThunk('products', async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    return result.data;
})
