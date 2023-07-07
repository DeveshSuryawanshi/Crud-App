import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <DIV>
        <h1>BATMAN CRUD APP</h1>
        <Link className='link' to={"./"}>HomePage</Link>
        <Link className='link' to={"./login"}>Login</Link>
        <Link className='link' to={"./admin"}>Admin</Link>
    </DIV>
  )
}

const DIV = styled.div`
background-color: #93fb6d;
padding: 20px;
display : flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
/* border-bottom: 1px solid black; */

  h1{
    margin: 0 15px;
    font-size: 20px;
    font-weight: 900;
  }

 .link{
  margin: 0 15px;
  font-weight: 500;
 }

`
