import React from 'react'
import styled from 'styled-components'
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Information>
                <FooterInfo>
                <Info>Information</Info>
                <About>About Us</About>
                <Touch>Get In Touch</Touch>
                <Shipping>Shipping & Returns</Shipping>
                <Match>Price Match</Match>
                <Address>John Clogs Shoes, 127 Kubwa, Abuja Nigeria</Address>
                </FooterInfo>

                <FooterInfo>
                <Info>Bonus/Offers</Info>
                <About>Gift Cards</About>
                <Touch>Loyalty Programs</Touch>
                </FooterInfo>

                <FooterInfo>
                <Info>News</Info>
                <About>Blogs</About>
                </FooterInfo>
                <FooterInfo>
                <Info>stay Connected</Info>
                <Icon>
                <Face><TiSocialFacebook/></Face>
                <Insta><AiOutlineInstagram/></Insta>
                <What><FaWhatsapp/></What>
                <Twitter><FiTwitter/></Twitter>
                </Icon>

                <Update>
                    <Stay>
                        Stay Updated
                    </Stay>
                    <Input>
                    <input type="email" placeholder='Enter Email Address'/>
                    <Subscribe>Subscribe</Subscribe></Input>
                </Update>
                </FooterInfo>
            </Information>
            <Line></Line>
            <Copy>&copy; John Clog Shoes. All Rights Reserved.</Copy>
        </Wrapper>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: calc(70vh - 110px);
    background-color: black;
    opacity: 0.92;
`
const Wrapper = styled.div`
    height: 100%;
    margin: 0px 60px;
`
const Information = styled.div`
    display: flex;
`
const FooterInfo = styled.div`
    margin-top: 60px;
    margin-right: 110px;
    display: flex;
    flex-direction: column;
`
const Info = styled.div`
        color: white;
        text-transform: uppercase;
        padding-bottom: 10px;
        font-size: 13px;
        font-weight: 400;
        font-family: 'Quicksand, sans-serif';
`
const About = styled.div`
        color: grey;
        line-height: 1.8;
        font-size: 13px;
        font-family: 'Quicksand, sans-serif';
        position: relative;
        cursor: pointer;
        ::after{
        position: absolute;
        content: " ";
            height: 1px;
            right: 0;
            bottom: -1px;
            background-color: white;
            width: 100%;
            display: none;
        }

        :hover{
        color: white;
        ::after{
            display: block;
        }
    }
`
const Touch = styled(About)``
const Shipping = styled(About)``
const Match = styled(About)``
const Address = styled(About)``

const Face = styled.div`
    background-color: white;
    color: black;
    margin-right: 10px;
    border: 1px solid;
    width: 20px;
    height: 20px;
    padding: 5px;
    font-size: 18px;
    border-radius: 70%;
    cursor: pointer;
    :hover{
        color: white;
        background-color: black;
    }
`
const Insta = styled(Face)``
const What = styled(Face)``
const Twitter = styled(Face)``

const Icon = styled.div`
    display: flex;
`

const Update =  styled.div`
    display: flex;
    flex-direction: column;
`
const Stay =  styled.div`
        color: white;
        text-transform: uppercase;
        padding-bottom: 10px;
        font-size: 13px;
        font-weight: 400;
        font-family: 'Quicksand, sans-serif';
        margin-top: 30px;
`
const Input =  styled.div`
    display: flex;
    input{
        width: 210px;
        height: 25px;
        border-radius: 2px;
        border: 1px solid grey;
        outline: none;
        background-color: black;
        opacity: 0.92;
        margin-right: 12px;
        color: grey;
        &::placeholder{
            color: grey;
            font-size: 13px;
            font-style: italic;
        }
    }
`
const Subscribe =  styled.div`
    color: white;
    width: 110px;
    height: 25px;
    background-color: grey;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    font-family: 'Quicksand, sans-serif';
    padding: 2px;
    border-radius: 2px;
    cursor: pointer;
    text-transform: uppercase;
    :hover{
        background-color: white;
        color: black;
    }
`
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
    margin-top: 80px;
`
const Copy = styled.div`
       color: grey;
        line-height: 1.8;
        font-size: 13px;
        font-family: 'Quicksand, sans-serif';
        margin-top: 18px;
`