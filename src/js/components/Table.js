import React from 'react'
import {Segment, Icon, Table, Loader,Button, Popup, Grid, Header } from 'semantic-ui-react'
import StatusButton from './StatusButton'

class TableExamplePositiveNegative extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: 0,
      data: [],
      key:Math.random()
    }

    this.updateKey = this.updateKey.bind(this);
  }

  componentDidMount() {
    let self = this
    let userId = this.props.userId
    console.log(userId)
    fetch(`https://wjdemoapi.herokuapp.com/api/jobs/jobs/${userId}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(function(res){ return res.json(); }).then(function(myJson) {
      self.setState({ data: myJson, loading: 1 });
    });
  }

  updateKey(){
    this.setState({key:Math.random(), loading: 0});
    this.componentDidMount()
  }

  render() {
    console.log(this.state.data)
    const data = this.state.data;
    if(this.state.loading == 0){
      return(
        <Segment>
          <Loader active>Loading</Loader>
        </Segment>)
    }

    const listItems = data.map((d) =>
      <Table.Row>
        <Table.Cell>{d._id}</Table.Cell>
        <Table.Cell>{d.address}</Table.Cell>
        <Table.Cell>{d.start}</Table.Cell>
        <Table.Cell>{d.end}</Table.Cell>
        <Table.Cell>{d.status}</Table.Cell>
        <Table.Cell>
          <StatusButton jobId = {d._id} status = {d.status} updateKey = {this.updateKey}/>
        </Table.Cell>
      </Table.Row>);

    return(
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Start</Table.HeaderCell>
            <Table.HeaderCell>End</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Update Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {listItems}
        </Table.Body>
      </Table>
    );
  }
}

export default TableExamplePositiveNegative;