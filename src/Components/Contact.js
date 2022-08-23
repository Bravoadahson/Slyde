import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container>
      <Wrapper>
          <Text>
            <Us>Contact Us</Us>
            <Content>
            Need to get in touch with us? Either fill the
             form with your inquiry or find the <span>department email </span>
              you'd like to contact
            </Content>
          </Text>
          <Card>
            <Name>
              
              <label for='fname'>First Name*</label>
              <input type='text'/>
            
              <label for='lname'>Last Name*</label>
              <input type='text'/>

              <label for='email'>Email*</label>
              <input type='email'/>

              <label for='text'>What can we help you with?</label>
              <textarea type='email'/>
              <button>Submit</button>
            </Name>
          </Card>
      </Wrapper>
    </Container>
  )
}

export default Contact;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 230px);
  background: #fff;
  font-family: 'Quicksand, sans-serif';
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 180px 200px;
`
const Us = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: 'Quicksand, sans-serif';
`
const Content = styled.div`
  font-size: 17px;
  font-family: 'Quicksand, sans-serif';
  margin-top: 16px;
  span{
    color: blue;
    text-decoration: underline;
    font-size: 16px;
    font-family: 'Quicksand, sans-serif';
    word-spacing: 4px;
    cursor: pointer;
  }
`
const Card = styled.div`
  flex: 1;
`
const Name = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  width: 300px;
  label{
    font-size: 16px;
    width: 100%;
    margin: 8px 0;
  }
  input{
    width: 80%;
    height: 28px;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    outline: none;
  }
  textarea{
    resize: none;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    outline: none;
    height: 170px;
    width: 80%;
  }
  button{
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    outline: none;
    width: 30%;
    margin: 12px 0px;
    font-size: 16px;
    padding: 8px;
    background-color: grey;
    color: black;
    cursor: pointer;
    :hover{
      color: white;
    }
  }
`