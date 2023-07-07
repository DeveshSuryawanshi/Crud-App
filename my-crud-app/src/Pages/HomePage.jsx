import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../Components/ProductList'
import { SideBar } from '../Components/SideBar'

export const HomePage = () => {
  return (
    <DIV>
      <div className='sideBar'>
        <SideBar/>
      </div>
      <div className='productList'>
        <ProductList/>
      </div>
    </DIV>
  )
}

const DIV = styled.div`
display: flex;

.sideBar{
    width: 15%;
  }
  
  .productList{
    width: 85%;
    margin: 20px;
}
`
