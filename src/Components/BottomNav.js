import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Nav>
            <Home to="/">Home</Home>
            <Shoes to="/">Shoes</Shoes>
            <Bags to="/">Bags</Bags>
            <Brands to="/">Brands</Brands>
            <Promo to="/">Promo</Promo>
            <Accessories to="/">Accessories</Accessories>
            <Contact to="/contact">Contact</Contact>
            </Nav>
            
        </Wrapper>
    </Container>
     </>
  )
}

export default BottomNav;

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`
const Nav = styled.div`
    min-height: 40px;
    display: flex;
    margin-top: 15px;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    font-family: 'Quicksand';
    cursor: pointer;
    `
const Home = styled(NavLink)`
    margin-right: 100px;
    font-size: 13px;
    font-weight: 400;
    position: relative;
    color: #0a0000;
    font-family: 'Quicksand, sans-serif';
    color: inherit;
    text-decoration: none;
    :hover{
        color: grey;
    }
    ::before{
        position: absolute;
        content: " ";
            height: 2px;
            left: 0;
            bottom: -3px;
            background-color: grey;
            width: 100%;
            display: none;
    }
    :hover{
        ::before{
            display: block;
        }
    }
`
const Shoes = styled(Home)``
const Bags = styled(Home)``
const Brands = styled(Home)``
const Promo = styled(Home)``
const Accessories = styled(Home)``
const Contact = styled(Home)``