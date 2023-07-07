import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/ProductReducer/action";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  color: "",
  gender: "",
  category: "",
};

export const EditPage = () => {
  const [FormData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.ProductReducer.isLoading);
  const { id } = useParams();
  const product = useSelector((store) => store.ProductReducer.products);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newData = {
      ...FormData
    };
    dispatch(updateProduct(newData, id));
    setFormData(initialState);
  };

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    setFormData(data);
  }, []);


  return (
    <div>
      <DIV>
        <form onSubmit={SubmitHandler}>
          <div className="animated2">
            <div className="line">Add Product</div>
            <div className="line">Of any brand</div>
            <div className="line">H R X</div>
            <div className="line">Nike</div>
            <div className="line">h & m</div>
          </div>
          <h3>Enter Name</h3>
          <Input
            placeholder="Name"
            name="name"
            size="md"
            value={FormData.name}
            m={2}
            onChange={handleChange}
          />
          <h3>Enter Image url</h3>
          <Input
            placeholder="Image"
            name="image"
            size="md"
            value={FormData.image}
            m={2}
            onChange={handleChange}
          />
          <h3>Enter Brand Name</h3>
          <Input
            placeholder="Brand"
            name="brand"
            size="md"
            value={FormData.brand}
            m={2}
            onChange={handleChange}
          />
          <h3>Enter Price</h3>
          <Input
            placeholder="Price"
            name="price"
            type="number"
            size="md"
            value={FormData.price}
            m={2}
            onChange={handleChange}
          />

          <div className="selectContainer">
            <div>
              <Select
                m={2}
                name={"gender"}
                value={FormData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Men</option>
                <option value="female">Women</option>
                <option value="kids">Kids</option>
              </Select>
              <Select
                m={2}
                name="category"
                value={FormData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="topwear">Top Wear</option>
                <option value="bottomwear">Bottom Wear</option>
                <option value="footwear">Foot Wear</option>
              </Select>
              <Select
                m={2}
                name="color"
                value={FormData.color}
                onChange={handleChange}
              >
                <option value="">Select Color</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="black">Black</option>
              </Select>
            </div>
          </div>
          <Button
            isLoading={loading}
            loadingText="Submitting"
            colorScheme="teal"
            variant="outline"
            w={40}
            type="submit"
          >
            Update Product
          </Button>
        </form>
      </DIV>
    </div>
  );
};

const DIV = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;

  form {
    width: 80%;
    text-align: left;
    background-color: #1c1c1e;
    padding: 20px;
    padding-right: 35px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .selectContainer {
    display: flex;
  }

  h3 {
    margin: 0px 10px;
    color: white;
  }

  Input {
    border: solid white 2px;
    color: white;
  }

  button {
    margin-left: 7px;
    margin-top: 10px;
    background-color: #93fb6d;
    color: black;
  }

  select {
    width: 225px;
    color: white;
  }

  option {
    color: black;
  }

  .animated2 {
    color: #93fb6d;
    margin-bottom: 10px;
    height: 60px;
    overflow: hidden;
  }

  .line {
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 60px;
  }

  .line:first-child {
    animation: anim 12s infinite;
  }

  @keyframes anim {
    0% {
      margin-top: 0;
    }
    16% {
      margin-top: -60px;
    }
    33% {
      margin-top: -120px;
    }
    50% {
      margin-top: -180px;
    }
    66% {
      margin-top: -120px;
    }
    82% {
      margin-top: -60px;
    }
    100% {
      margin-top: -380px;
    }
  }
`;
