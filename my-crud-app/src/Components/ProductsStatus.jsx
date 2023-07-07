import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Progress } from '@chakra-ui/react'

export const ProductsStatus = () => {

  const [Profit, setProfit] = useState(63);
  const [PredictedLoss, setPredictedLoss] = useState(10);
  const [CurrentMonthLoss, setCurrentMonthLoss] = useState(5);

  useEffect(()=>{
    setInterval(()=>{
      let arr = ["40","43","23",'45','70','73','72','56','92','90','82','87','55','34'];
      let arr2 = ["13","23","12",'5','16','30','33',"34",'40','39','43',"45",'47','48'];
      let arr3 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
      let random = arr[(Math.floor(Math.random() * (arr.length)))];
      let random2 = arr2[(Math.floor(Math.random() * (arr2.length)))];
      let random3 = arr3[(Math.floor(Math.random() * (arr3.length)))];
      setProfit(random)
      setPredictedLoss(random2);
      setCurrentMonthLoss(random3); 
    },3000)
  },[])


  return (
    <DIV>
      <h1>Products Sales Status</h1>
      <div className="container">
        <div>
          <CircularProgress
            size={150}
            value={Profit}
            textColor={"#93fb6d"}
            color="#93fb6d"
          >
            <CircularProgressLabel>{Profit}%</CircularProgressLabel>
          </CircularProgress>
          <h2 className="h1">Profit</h2>
        </div>
        <div>
          <CircularProgress
            size={150}
            value={+PredictedLoss}
            textColor={"orange"}
            color="orange"
          >
            <CircularProgressLabel>{PredictedLoss}%</CircularProgressLabel>
          </CircularProgress>
          <h2 className="h2">Predicted Loss</h2>
        </div>
        <div>
          <CircularProgress size={150} value={CurrentMonthLoss} textColor={"red"} color="red">
            <CircularProgressLabel>{CurrentMonthLoss}%</CircularProgressLabel>
          </CircularProgress>
          <h2 className="h3">Total Loss</h2>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
background-color: #1c1c1e;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
padding: 20px;
width: 90%;
border-radius: 10px;
      
  .container {
    display: flex;
    justify-content: space-around;
  }
  
  .h1{
    color : #93fb6d;
  }

  .h2{
    color : orange;
  }

  .h3{
    color : red;
  }

  h1{
    color : #93fb6d;
    font-size: 35px;
    margin-bottom: 20px;
  }
`;
