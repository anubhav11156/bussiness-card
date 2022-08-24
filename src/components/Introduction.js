import React from 'react'
import styled from 'styled-components'


function Introduction() {
  const name = "Thel' Vedem!"
    return (
        <Container>
          <Name>
            <p className="Name">{name}</p>
            <p className="job">Psychedelic Star</p>
            <p className="website">dmt@psytrance.website</p>
          </Name>

          <Buttons>

            <LeftButton className="email-button">
              <div className="img-div">
                <img src="./images/email.png"/>
              </div>
              <div className="txt-div">
                <p>Email</p>
              </div>
            </LeftButton>

            <RightButton className="linkedin-button">
              <div className="img-div">
                <img src="./images/linkedin.png"/>
              </div>
              <div className="txt-div">
                <p>LinkedIn</p>
              </div>
            </RightButton>

          </Buttons>
          <About>
            <div className="heading">
              <p>About</p>
            </div>
            <div className="content-div">
              <p className="content">
                Yo! I am psychedelic visual artist with particular interest in doing some serius fun.
                You know what...they call me cyborg! Lol literally,  I do the psyk-psyk magic...phewww!
              </p>
            </div>
          </About>
          <Interest>
            <div className="heading">
              Interests
            </div>
            <div className="content-div">
              <p className="content">
                Psytrance Expert, Cyberanarchist, Neural Engineering is what I do,
                don't take me easy..can code your brain!
              </p>
            </div>
          </Interest>
        </Container>
    )
}

export default Introduction

const Container = styled.div`
  flex:1.1;
  background-color: orange;
  display:flex;
  flex-direction: column;
`
const Name=styled.div`
  flex:0.8;
  background-color:rgba(26, 27, 33, 1);
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  .Name {
    color: white;
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
  }

  .job{
    margin-top: 5px;
    font-family: Arial;
    font-size: 14.5px;
    color: rgba(243, 191, 153, 1);
  }

  .website{
    color: white;
    margin-top: 17px;
    font-size:12.5px;
  }
`

const Buttons=styled.div`
  padding-top: 8px;
  flex:0.4;
  background-color: rgba(26, 27, 33, 1);
  display:flex;
  justify-content: center;
  align-items: center;

  .email-button,
  .linkedin-button {
    width: 120px;
    height: 40px;
    border-style: none;
    cursor: pointer;
    border-radius: 7px;
    font-size: 15px;
  }
`

const About=styled.div`
  padding-top: 25px;
  flex:1;
  background-color: rgba(26, 27, 33, 1);

  .heading {
    color: white;
    font-family: Arial;
    font-weight: bold;
    margin-left: 25px;
    margin-top:10px;
    font-size: 22px;
  }

  .content {
    width: 310px;
    margin-left: 25px;
    margin-top: 9px;
    color: rgba(220, 220, 220, 1);
    font-family: Arial;
    font-size: 14px;
    line-height: 1.2;
  }
`
const Interest=styled.div`
  flex:1;
  background-color: rgba(26, 27, 33, 1);

  .heading {
    color: white;
    font-family: Arial;
    font-weight: bold;
    margin-left: 25px;
    margin-top:10px;
    font-size: 22px;
  }

  .content {
    width: 310px;
    margin-left: 25px;
    margin-top: 9px;
    color: rgba(220, 220, 220, 1);
    font-family: Arial;
    font-size: 14px;
    line-height: 1.2;
  }
`

const LeftButton=styled.button`
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-div{
    flex:1;
    display:flex;
    justify-content:end;
    align-items: center;
  }

  .txt-div {
    flex:2;
    display:flex;
    justify-content: center;
    align-items: center;

  }

  p {
    font-size: 16.3px;
    margin-right: 12px;
  }

  img {
    width: 19.2px;
  }
`

const RightButton=styled.button`
  background-color: white;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-div{
    flex:1;
    display:flex;
    justify-content:end;
    align-items: center;
  }

  .txt-div {
    flex:2;
    display:flex;
    justify-content: center;
    align-items: center;

  }

  p {
    font-size: 16.3px;
    margin-right: 12px;
  }

  img {
    width: 30px;
  }
`
