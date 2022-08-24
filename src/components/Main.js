import React from 'react'
import styled from 'styled-components'
import Profile from './Profile'
import Introduction from './Introduction'
import Footer from './Footer'

function Main() {
    return (
        <Container>
          <Profile />
          <Introduction />
          <Footer />
        </Container>
    )
}

export default Main

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 370px;
  height: 870px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 20px;
  overflow: hidden;
`
