import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import CategoryItem from "./CategoryItem";
import { categories } from "../Api/StaticData";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    // <Container>{
    //   categories.map((item) =>{
    //     return(<CategoryItem item='item' key={item.id}/>)
        
    //   })
    // }
    // </Container>
  );
};

export default Categories;
