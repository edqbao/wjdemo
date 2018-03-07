import React from 'react'
import {Segment, Icon, Table, Loader,Button, Popup, Grid, Header } from 'semantic-ui-react'
import { withRouter } from "react-router-dom";

class StatusButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick(){
    console.log(this.props);

  }

  handleClick1(){
    let self = this
    let jobId = this.props.jobId
    let status = this.props.status
    fetch(`https://wjdemoapi.herokuapp.com/api/jobs/updatestatus/${jobId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'status': 'Active',
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(res){ return res.json(); }).then(function(myJson) {
      console.log(myJson)
      console.log(self.props)
      self.props.updateKey()
      self.setState({ key: Math.random() });
    });
  }

  handleClick2(){
    let self = this
    let jobId = this.props.jobId
    let status = this.props.status
    fetch(`https://wjdemoapi.herokuapp.com/api/jobs/updatestatus/${jobId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'status': 'Completed',
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(res){ return res.json(); }).then(function(myJson) {
      console.log(myJson)
      console.log(self.props)
      self.props.updateKey()
      self.setState({ key: Math.random() });
    });
  }

  render() {
    return(
      <Popup
        trigger={<Button>Update</Button>}
        flowing
        hoverable
      >
        <Grid centered divided columns={2}>
          <Grid.Column textAlign='center'>
            <Header as='h4'>Incomplete</Header>
            <Button onClick = {this.handleClick1}>Choose</Button>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header as='h4'>Completed</Header>
            <Button onClick = {this.handleClick2}>Choose</Button>
          </Grid.Column>
        </Grid>
      </Popup>
    );
  }
}

export default withRouter(StatusButton);