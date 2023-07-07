import React from "react";
import styled from "styled-components";
import { AdminAddProductForm } from "../Components/AdminAddProductForm";
import { Input } from "@chakra-ui/react";
import { ProductsStatus } from "../Components/ProductsStatus";
import { ProductsSales } from "../Components/ProductsSales";

export const Admin = () => {
  return (
    <div>
      <DIV>
        <div className="container1">
          <AdminAddProductForm />
        </div>
        <div className="container2">
          <div>
            <ProductsStatus />
          </div>
          <div>
            <ProductsSales/>
          </div>
        </div>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  height: 100vh;
  margin-top: 30px;

  .container1 {
    width: 40%;
  }

  .container2 {
    width: 60%;
  }
`;
