import React from 'react'
import styled from 'styled-components'
import {TiShoppingCart} from 'react-icons/ti'
import male from './image/made-sneaker.jpg'
import female from './image/ladywear.jpg'

const Items = () => {
  return (
    <Container>
        <Wrapper>
        <CartCard>
               <Header>
                Your Cart <span><TiShoppingCart/></span>
               </Header>
               <CartItems>
                <img src={male}/>
                <Name>
                    <span>2022 New Fashion Sneaker</span>
                    <Price>
                        #25,000
                    </Price>
                </Name>
            </CartItems>
               <CartItems>
                <img src={female}/>
                <Name>
                    <span>2022 New Fashion Trend</span>
                    <Price>
                        #15,000
                    </Price>
                </Name>
            </CartItems>
            <Total>Total: #45,000</Total>
            <Pay>Pay Now</Pay>
            </CartCard>  
        </Wrapper>
    </Container>
  )
}

export default Items;

const Container = styled.div`
    width: 100%;
    margin-top: -2em;
`
const Wrapper = styled.div`
`
const CartCard = styled.div`
  min-width: 200px;
  min-height: 500px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  margin-right: 100px;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 26px;
  font-weight: 900;
  span{
    display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 26px;
  font-weight: 900;
  margin-left: 12px;
  }
`
const CartItems = styled.div`
    display: flex;
    margin-left: 18px;
    margin-top: 22px;
    border-bottom: 2px solid grey;
    padding-bottom: 12px;
    img{
        width: 80px;
        height: 90px;
    }
`
const Name = styled.div`
    margin-left: 12px;
`
const Price = styled.div`
    margin-top: 15px;
    font-size: 22px;
    color: grey;
    font-weight: 600;
`
const Total = styled.div`
    margin-top: 25px;
    font-size: 26px;
    color: grey;
    font-weight: 700;
    margin-left: 22px;
`
const Pay = styled.div`
    margin-top: 45px;
    font-size: 18px;
    color: white;
    font-weight: 900;
    background-color: skyblue;
    position: absolute;
    padding: 11px;
    border-radius: 7px;
    margin-left: 180px;
`
