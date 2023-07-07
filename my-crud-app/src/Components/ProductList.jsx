import { Spinner } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const { products, isLoading, isError } = useSelector((store) => {
    return {
      products: store.ProductReducer.products,
      isLoading: store.ProductReducer.isLoading,
      isError: store.ProductReducer.isError,
    };
  });

  let paramsObj = {
    params: {
      gender: searchParams.getAll("gender"),
      color: searchParams.getAll("color"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProduct(paramsObj));
  }, [searchParams]);

  return (
    <div>
      <DIV>
        {isLoading ? (
          <Spinner
            margin={"auto"}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#93fb6d"
            size="xl"
          />
        ) : (
          products.length > 0 &&
          products?.map((el) => {
            return <ProductCard key={el.id} {...el} />;
          })
        )}
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
`;
