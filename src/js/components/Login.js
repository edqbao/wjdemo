import React from 'react'
import {Header, Icon, Button, Checkbox, Form, Grid, Container, Segment } from 'semantic-ui-react'
import {Link,HashRouter} from 'react-router-dom'
import { withRouter } from "react-router-dom";


class FormExampleForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
    isauth: 0,
    email: '',
    password: '',};

    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit() {
    let self = this
    console.log(this.props.history)
    fetch(`http://wjdemoapi.us-east-2.elasticbeanstalk.com/api/users/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify({
        user: {email:this.state.email,
              password:this.state.password}
      })
    })
    .then(function(res){ return res.json(); }).then(function(myJson) {
      if(myJson.user.token){
        self.props.history.push(`/dashboard/${myJson.user.id}`)
      }
    });

  }

  render(){
    if (this.state.isauth == 0){
      return (
        <HashRouter>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field width='16'>
              <label>Email</label>
              <input placeholder='Email' value={this.state.email} onChange={this.handleEmail}/>
            </Form.Field>
            <Form.Field width='16'>
              <label>Password</label>
              <input placeholder='Password' value={this.state.password} onChange={this.handlePassword}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </HashRouter>
      );
    };
    if (this.state.isauth == 1){
      return (
        <HashRouter>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field width='16'>
              <label>Email</label>
              <input placeholder='Email' value={this.state.email} onChange={this.handleEmail}/>
            </Form.Field>
            <Form.Field width='16'>
              <label>Password</label>
              <input placeholder='Password' value={this.state.password} onChange={this.handlePassword}/>
            </Form.Field>
            <Link to="/dashboard">
              <Button type='submit'>Submit</Button>
             </Link>
          </Form>
        </HashRouter>
      );
    }
  }


}

export default withRouter(FormExampleForm);