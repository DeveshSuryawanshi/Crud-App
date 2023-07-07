import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Batman from "../Assets/Batman.png";
import Background from "../Assets/Background6.jpg"
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const {isAuth, isError} = useSelector((store) => {
    return{
      isAuth : store.AuthReducer.isAuth,
      isError : store.AuthReducer.isError
    }
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      email : Email,
      password : Password
    }

    dispatch(login(userData)).then(()=>{
      navigate(location.state, {replace : true})
    })
  }


  return (
    <DIV >
      <div className="container">
        <div>
          <div className="container2">
            <img src={Batman} alt="error" />
            <h1>
              THE DARKNESS IS ALIVE FOR GOTHAM
            </h1>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1>{isAuth ? "Login Sucessful" : isError ? "Invalid Credentials": "Login"}</h1>
            <h3>Enter Email</h3>
            <Input placeholder="Email" value={Email} size="lg" type={"email"} onChange={(e)=> setEmail(e.target.value)} />
            <h3>Enter Password</h3>
            <Input placeholder="Password" value={Password} size="lg" type={"password"} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  background-image: url(${Background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: black;
  

  .container {
    display: flex;
    width: 600px;
    background-color: #111112;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 30px;
    margin: 40px;
    border-radius: 15px;
    height: 400px;
    margin-top: 150px;
  }

  form {
    width: 300px;
    background-color: #1c1c1e;
    padding: 20px;
    border-radius: 10px;
  }

  img {
    width: 300px;
  }

  Input {
    margin-bottom: 20px;
    color: white;
  }

  h4{
    color : #93fb6d;
  }

  h3 {
    color: white;
    text-align: start;
    margin-bottom: 10px;
  }

  h1 {
    color: #93fb6d;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 900;
  }

  button {
    background-color: #93fb6d;
    padding: 5px 20px;
    border-radius: 5px;
  }

  .container2{
    margin-right: 20px;
  }
`;
