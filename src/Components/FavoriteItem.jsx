import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { removeFromFav } from "../Redux/FavoritesSlicer";
import { add } from "../Redux/CartSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const FavoriteItem = () => {
  const FavoritesItems = useSelector((state) => state.Favorites.Fav);
  console.log(FavoritesItems);
  const dispatch = useDispatch();
  const RemoveItem = (id) => {
    dispatch(removeFromFav(id));
  };
  const AddToCart = (item) => {
    dispatch(add(item));
  };
  return (
    <div>
      {FavoritesItems.map((item) => {
        return (
          <Container>
            <Wrapper>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  venenatis, dolor in finibus malesuada, lectus ipsum porta
                  nunc, at iaculis arcu nisi sed mauris. Nulla fermentum
                  vestibulum ex, eget tristique tortor pretium ut. Curabitur
                  elit justo, consequat id condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ {item.price}</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>XS</FilterSizeOption>
                      <FilterSizeOption>S</FilterSizeOption>
                      <FilterSizeOption>M</FilterSizeOption>
                      <FilterSizeOption>L</FilterSizeOption>
                      <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                  </AmountContainer>
                  <Button onClick={() => AddToCart(item)}>ADD TO CART</Button>
                  <Button onClick={() => RemoveItem(item.id)}>
                    REMOVE ITEM
                  </Button>
                </AddContainer>
              </InfoContainer>
            </Wrapper>
          </Container>
        );
      })}
    </div>
  );
};

export default FavoriteItem;
