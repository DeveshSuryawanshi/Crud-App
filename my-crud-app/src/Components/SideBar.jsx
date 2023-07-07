import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const SideBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialGender = searchParams.getAll("gender");
    const initialColor = searchParams.getAll("color");
    const initiOrder = searchParams.get('order')
    const [gender, setGender] = useState(initialGender || []);
    const [color, setColor] = useState(initialColor || []);
    const [order, setOrder] = useState(initiOrder || "");
  
    useEffect(() => {
      const params = {
        gender,
        color,
        order
      };
      setSearchParams(params);
    }, [gender, color, order]);
  
    const handleGender = (e) => {
      const { value } = e.target;
      let newGender = [...gender];
  
      // Use Alaways newGender
      if (newGender.includes(value)) {
        newGender = newGender.filter((el) => el !== value);
      } else {
        newGender.push(value);
      }
  
      setGender(newGender);
    };
  
    const handleColor = (e) => {
      const { value } = e.target;
      let newColor = [...color];
  
      // Use Alaways newColor
      if (newColor.includes(value)) {
        newColor = newColor.filter((el) => el !== value);
      } else {
        newColor.push(value);
      }
  
      setColor(newColor);
    };
  
    const handleOrder = (e) => {
      const { value } = e.target;
      let newOrder = value
      setOrder(newOrder);
    };
  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>

      <h3>Filter By Color</h3>
      <div>
        <input
          type="checkbox"
          value={"red"}
          onChange={handleColor}
          checked={color.includes("red")}
        />
        <label>Red</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"blue"}
          onChange={handleColor}
          checked={color.includes("blue")}
        />
        <label>Blue</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"green"}
          onChange={handleColor}
          checked={color.includes("green")}
        />
        <label>Green</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"black"}
          onChange={handleColor}
          checked={color.includes("black")}
        />
        <label>Black</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"white"}
          onChange={handleColor}
          checked={color.includes("white")}
        />
        <label>White</label>
      </div>

      <h3>Sort by Price</h3>
      <div onClick={handleOrder}>
        <div>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order == "asc"}
          />
          <label>Low To High</label>
        </div>
        <div>
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order == "desc"}
          />
          <label>High to Low</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  padding: 0 20px;
  border-right: 1px solid #93fb6d;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  background-color: #1c1c1e;
`;
