import React, { useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { getproducts } from "../Redux/ProductSlice";
import { categories } from "../Api/StaticData";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Container1 = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoryItem = (item) => {
  console.log(item);
  // const dispatch = useDispatch();
  // const { data: products } = useSelector((state) => state.products);
  // useEffect(() => {
  //   //api
  //   // fetch('https://fakestoreapi.com/products')
  //   // .then(data => data.json())
  //   // .then(result => getproducts(result))
  //   dispatch(getproducts());
  // }, []);
  // console.log(products);

  // // const AddToCart = (item) => {
  // //   dispatch(add(item));
  // // };
  return (
    <Container1 style={{display:"flex",flexWrap:"wrap"}}>
    {
      categories.map((item)=>{
        return(<Container>
          <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Container>

        )
      })
    }
      
    </Container1>
  );
};

export default CategoryItem;
