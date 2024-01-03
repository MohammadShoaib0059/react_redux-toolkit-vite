import styled from "styled-components";
import { mobile } from "../Responsive";
import Navigation from "./Navbar";
import Newslatter from "./Newslatter";
import Footer from "./Footer";
import Announcement from "./Announcement";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Filtered_Price, getproducts } from "../Redux/ProductSlice";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterData from "./FilterData";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div``;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handlest1stFilterChange = (event) => {
    setPrice(event.target.value);
    dispatch(Filtered_Price(price));
  };
  const handle2ndFilterChange = (event) => {
    setCategory(event.target.value);
  };
  const AllProducts = useSelector((state) => state.products.filter_data);
  console.log(AllProducts);
  useEffect(() => {
    dispatch(getproducts());
  }, []);

  // const handleFilter = (price) => {
  //   dispatch(Filtered_Product(price));
  //   // console.log(FilteredProduct());
  // };
  
  return (
    <Container>
    <Navigation />
    <Announcement />
    <img src="../Images/banner-1.jpg" width="100%"/>
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <FilterAltIcon/>
        <FormControl variant="standard" sx={{ mt:-2,ml:2,minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={price}
          onChange={handlest1stFilterChange}
          label="Age"
        >
         <MenuItem value="">
            <em>None</em>
          </MenuItem>
        <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={(100)}>100</MenuItem>
          <MenuItem value={(100>70)}>70 to 100</MenuItem>
          <MenuItem value={(70>30)}>30 to 70</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{mt:-2,ml:2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handle2ndFilterChange}
          label="Age"
        >
         <MenuItem value="">
            <em>None</em>
          </MenuItem>
        <MenuItem value={100}>All</MenuItem>
          <MenuItem value={10}>Womens Fashion</MenuItem>
          <MenuItem value={20}>Jackets</MenuItem>
          <MenuItem value={30}>Watches</MenuItem>
          <MenuItem value={30}>Sneakers</MenuItem>
        </Select>
      </FormControl>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <button onClick={() => handleFilter('all')}>All Products</button>
        <button onClick={() => handleFilter(100)}>100</button>
        <button onClick={() => handleFilter(70)}>70</button>
      </Filter>
    </FilterContainer>
   
      <FilterData/>
       
    <Newslatter />
    <Footer />
  </Container>
  )
}

export default FilteredProduct
