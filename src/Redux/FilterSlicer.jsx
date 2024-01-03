import { createSlice } from "@reduxjs/toolkit";
import { getproducts } from "./ProductSlice";

const initialState ={
    filter_data:[]
};
const FilterSlicer = createSlice({
    name:'filter',
    initialState,
    reducers:{
        FilteredProduct(state,action){
// let data = getproducts.filter((product) =>
// product.type === action.payload
// );
// state.FilteredProduct = data;
let {price} = action.payload;
if(price === "all"){
state.filter_data = state.getproducts;
}else{
    state.filter_data = state.getproducts.filter(product => product.price = price);
}
        }
    }
})
export const {FilteredProduct} = FilterSlicer.actions;
export default FilterSlicer.reducer;