import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
          <Twitter>
            <img src="/images/twitter-grey.png"/>
          </Twitter>

          <Facebook>
            <img src="/images/facebook-grey.png"/>
          </Facebook>

          <Pinterest>
            <img src="/images/pinterest-grey.png"/>
          </Pinterest>

          <Github>
            <img src="/images/linkedin-grey.png"/>
          </Github>

        </Container>
    )
}

export default Footer

const Container = styled.div`
  flex:0.15;
  background-color: rgba(18, 18, 20, 0.98);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 30%;
    max-height: 30%;
    cursor: pointer;
    opacity: 0.8;
  }
`

const Twitter=styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Facebook=styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Pinterest=styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Github=styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
`
