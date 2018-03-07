import React from 'react'
import {Header, Icon, Button, Checkbox, Form, Grid, Container, Segment } from 'semantic-ui-react'
import Login from './Login'

class LoginContainer extends React.Component{

  render(){
    return (
      <Container>
        <Grid className="segment centered">
          <Header as='h2' icon textAlign='center'>
            <Icon name='signing' circular />
            <Header.Content>
              WanderJaunt MaidApp
            </Header.Content>
            <Login/>
          </Header>
        </Grid>
      </Container>
    );
  }
}

export default LoginContainer;