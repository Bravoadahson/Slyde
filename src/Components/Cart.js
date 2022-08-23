import React from 'react'
import styled from 'styled-components'
import visa from './image/visa.png'
import paypal from './image/paypal.png'
import Items from './Items'

const Cart = () => {
  return (
    <Container>
        <Wrapper>
            <CardPay>
              <Head>
                <Customer>Customer Details</Customer>
                <Shipping>Shipping & Delivery</Shipping>
                <Billing>Billing & Payment</Billing>
                <Review>Review Order</Review>
              </Head>
              <PayType>
                <Method>
                  <Visa>
                    <Click></Click>
                    <img src={visa}/> 
                    <span>Visa</span>
                  </Visa>
                  <Visa>
                    <Click></Click>
                    <img src={paypal}/> 
                    <span>PayPal</span>
                  </Visa>
                </Method>
              </PayType>
              <Detail>
                <Details>
                  <Payment>
                  Payment Details
                  </Payment>
                  <Number>
                  <label for='name'>Card Name</label>
                  <input type='text'/>
                  <label for='name'>Card Number</label>
                  <input type='text'/>
                  <Expire>
                    <Label>
                      <label>Expiring Date</label>
                      <input type='text'/>
                    </Label>
                    <Labels>
                      <label>CVV</label>
                      <input type='text'/>
                    </Labels>
                  </Expire>
                  </Number>
                </Details>
              </Detail>
            </CardPay>
            <Items/>
        </Wrapper>
    </Container>
  )
}

export default Cart;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
`
const Wrapper = styled.div`
  height: 100%;
  margin: 47px 60px;
  display: flex;
`
const CardPay = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 590px;
  /* ::before{
    content: " ";
    height: 2px;
    width: 100%;
    position: absolute;
    background-color: grey;
    left: 0;
    bottom: -15px;
    opacity: 0.7;
  } */
`
const Head = styled.div`
  display: flex;
  margin: 0px 40px;
  gap: 32px;
`
const Customer = styled.div`
  width: 120px;
`
const Shipping = styled.div`
  width: 120px;
`
const Billing = styled.div`
  width: 120px;
  position: relative;
  ::before{
    content: " ";
    height: 3px;
    width: 60%;
    position: absolute;
    background-color: #000000;
    left: 0;
    bottom: -15px;
  }
  
`
const Review = styled.div`
  width: 90px;
`
const PayType = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;
`
const Method = styled.div`
  display: flex;
`
const Visa = styled.div`
  width: 110px;
  height: 80px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  position: relative;
  margin-right: 25px;
  span{
    margin-left: 38px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  img{
    width: 80px;
    height: 50px;
    margin-left: 27px;
  }
`
const Click = styled.div`
  position: absolute;
  height: 11px;
  width: 11px;
  border-radius: 100%;
  background-color: grey;
  left: 2px;
  top: 30px;
`
const Detail = styled.div`
  width: 300px;
  min-height: 250px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
  margin-left: 80px;
  border-radius: 5px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
`
const Payment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Number = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  label{
    margin-bottom: 7px;
  }
  input{
    margin-bottom: 9px;
    width: 223px;
    height: 22px;
    outline: none;
  }
`
const Expire = styled.div`
  display: flex;

`
const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  input{
    width: 100px;
    outline: none;
  }
`
const Labels = styled.div`
  display: flex;
  flex-direction: column;
  input{
    width: 100px;
    outline: none;
  }
`


