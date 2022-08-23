import React from 'react'
import styled from 'styled-components'
import logo from './image/Bright-logo.jpg'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShopping} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Topnav>
                <Logo><img src={logo}/></Logo>
                <Navigation>
                      <Inputwrap>
                      <select>
                        <option value="Abuja" selected>Abuja</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value='Minna'>Minna</option>
                        <option value='Makurdi'>Makurdi</option>
                        <option value='Jos'>Jos</option>
                        <option value='Kaduna'>Kaduna</option>
                      </select>
                            <Input>
                            <input type='search' placeholder='Search'/>
                            <span><BiSearch/></span>
                            </Input>
                       </Inputwrap>
                       <Shipping>
                       FREE SHIPPING WITHIN NIGERIA ON ORDERS OVER <span>&#x20A6;30,000</span>
                       </Shipping>
                       <Cart to='/cart'><span><AiOutlineShopping/></span>Shopping Cart</Cart>
                </Navigation>
            </Topnav>
        </Wrapper>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
    width: 100%;
    min-height: 80px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Topnav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 21px 60px;
`
const Logo = styled.div`
    width: 90px;
    height: 80px;
    img{
        width: 100%;
        height: 100%;
    }
`
const Navigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Inputwrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    select{
        width: 40px;
        height: 24px;
        margin-right: 6px;
        border: 1px solid gray;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 600;
    }
`
const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    input{
        padding: 4px 21px;
        border: 1px solid gray;
        outline: none;
        height: 24px;
        border-radius: 3px;
    }
    span{
        position: absolute;
        top: 4px;
        left: 5px;
    }
`
const Shipping = styled.div`
    font-family: 'Quicksand';
    font-size: 12px;
    font-weight: 700;
    margin-top: 9px;
`
const Cart = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7px;
    margin-left: -89px;
    color: inherit;
    text-decoration: none;
    font-family: 'Quicksand, sans-serif';
    span{
        font-size: 27px;
        margin-right: 5px;
        margin-top: 3px;
        font-weight: 200;
    }
`