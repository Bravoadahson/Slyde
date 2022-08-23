import React from 'react'
import styled from 'styled-components';
import sneaker from './image/balance.png'

const Carousel = () => {
  return (
    <Container>
        <Wrapper>
            <img src={sneaker}/>
            <Text>
                <Motto>Hand Built To Last</Motto>
                <Fashion>Keep Your Fashion Trend On Fire <span>Shop Now</span></Fashion>
            </Text>
            <Demo>
                ooo
            </Demo>
        </Wrapper>
    </Container>
  )
}

export default Carousel;

const Container = styled.div`
    width: 91%;
    height: calc(70vh - 40px);
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 21px 60px;
    object-fit: cover;
    position: relative;
    
    img{
        width: 100%;
        height: 100%;
    }
`
const Demo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: orange;
`
const Text = styled.div`
    position: absolute;
    top: 40px;
    left: 60px;
`
const Motto = styled.div`
    font-size: 35px;
    font-weight: 800;
    font-variant: small-caps;
    font-family: 'Quicksand, sans-serif';
    color: orange;
`
const Fashion = styled.div`
    margin-top: 70px;
    font-family: 'Quicksand, sans-serif';
    color: #ffc529;
    font-size: 19px;
    font-weight: 800;
    span{
        background-color: black;
        padding: 11px 14px;
        border-radius: 18px;
        font-size: 16px;
        color: white;
        font-weight: 600;
    }
`