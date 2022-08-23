import React from 'react'
import styled from 'styled-components'
import data from './Sales.json'

const Arrival = () => {
  return (
    <Container>
        <Wrapper>
            <HotSales>
            <Line1></Line1>
            <Hot>Arrivals</Hot>
            <Line2></Line2>
            </HotSales>
            
            <Card>
                {data
                .map((el)=>(
                <Image key={el.id}>
                    <Img>
                    <img src={el.image}/>
                    <ImgContent>
                        <Content>Add To Cart</Content>
                        <Review>Quick Review</Review>
                    </ImgContent>
                    </Img>
                    <Detail key={el.detail}>
                        Hand made shoes from the pure finest craft
                    </Detail>
                    <Price key={el.price}>&#x20A6;30,000</Price>
                </Image>
                ))
                }
                 <More>SHOW MORE</More>
            </Card>
           
        </Wrapper>
    </Container>
  )
}

export default Arrival;

const Container = styled.div`
    width: 100%;
    min-height: 200px;
    margin-bottom: 130px;
`
const Wrapper = styled.div`
    margin: 40px 60px;
    height: 100%;
`
const HotSales = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 70px;
`
const Line1 = styled.div`
    height: 1px;
    background-color: grey;
    width: 45%;
    margin-top: 10px;
    margin: 17px 30px 0 -70px;
`
const Hot = styled.div`
    font-size: 25px;
    font-weight: 550;
    word-spacing: 5px;
    font-family: 'Quicksand, sans-serif';
    margin-left: 42px;
    span{
        color: #f1ad16;
    }
`
const Line2 = styled.div`
    height: 1px;
    background-color: grey;
    width: 45%;
    margin: 17px 0 0 67px;
`

const Card = styled.div`
    margin: 47px -42px 20px -42px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Image = styled.div`
    width: 152px;
    min-height: 400px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 8px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
`
const ImgContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    transition: 950ms;
`
const Img = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    object-fit: contain;
    border: none;
    border-radius: 6px;
    position: relative;
    :hover {
        img{opacity: 0.1;}
        transition: 950ms all;
        ${ImgContent}{display: block;
        opacity: 1;
        transition: 950ms all;
        }
        
    }
    img{
        width: 100%;
        border-radius: 5px;
    }
`



const Content = styled.div`
    margin: 80px 0 0 12px;
    border: 2px solid black;
    padding: 12px;
    font-size: 17px;
    font-weight: 400;
    font-variant: small-caps;
    font-family: 'Roboto';
`
const Review = styled.div`
     margin: 90px 0 0 12px;
     background-color: black;
     color: white;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 6px 0;
`
const Detail = styled.div`
    width: 100%;
    word-wrap: break-word;
    text-align-last: center;
    margin-top: 10px;
    font-size: 13px;
    line-height: 18px;
`
const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
`

const More = styled.div`
    font-size: 14px;
    font-weight: 800;
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -17px;
    border: 2px solid black;
    width: 180px;
    padding: 9px 90px;
    cursor: pointer;
    :hover{
        background-color: #0d0000;
        color: white;
        opacity: 0.86;
    }
`