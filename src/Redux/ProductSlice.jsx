import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 1. This is one method without extrareducer and without createasyncthunk
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// }

// 2 .With createasyncthunk and extrareducer.
export const getproducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  return data;
});

const initialState = {
  data: [],
  filter_data:[]
};
const ProductsSlicer = createSlice({
  name: "products",
  initialState,

  // 1. This things belongs to upper example of without create asyncthunk
  // reducers: {
  //   fetchProducts(state, action) {
  //     state.data = action.payload;
  //   },
  // },

  // 2. This thinks belongs to upper example of wit create asyncthunk
  extraReducers: {
    [getproducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getproducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getproducts.rejected]: (state, action) => {
      state.loading = false;
    },
    
  },
  reducers:{
//     Filtered_Product(state,action){
// const price = action.payload;
// if(price === 'all'){
// state.filter_data = state.data;
// }else{
// state.filter_data = state.data.filter(product => product.price === price);
// }
//     },
    Filtered_Price(state,action){
      const price = action.payload;
      if(price == "all"){
      state.filter_data = state.data;
      }else{
      state.filter_data = state.data.filter(product => product.price === price);
      }
          },
          Filtered_Category(state,action){
            const price = action.payload;
            if(price === 'all'){
            state.filter_data = state.data;
            }else{
            state.filter_data = state.data.filter(product => product.price === price);
            }
                }
}
 
});

export const { fetchProducts, Filtered_Category,Filtered_Price } = ProductsSlicer.actions;
export default ProductsSlicer.reducer;
