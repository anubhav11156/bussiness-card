import React from 'react'
import styled from 'styled-components'

function Profile() {
    return (
        <Container>
          <Profile_Pic src="./images/there_she_is.jpg"/>
        </Container>
    )
}

export default Profile

const Container = styled.div`
  flex:0.74;
  display: flex;
  background-color: lightpink;
`

const Profile_Pic = styled.img`
  max-width: 100%;
`
