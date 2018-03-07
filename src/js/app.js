import React, { Component } from 'react';
import { render } from 'react-dom';
import Table from './components/Table';
import TableHeader from './components/TableHeader';
import LoginC from './components/Container';
import {
    hashHistory,
    HashRouter,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

//5a9d91c0c81883351d81bca1
class Hello extends Component {
  render() {
    return (
        <div>
          <TableHeader userId = {this.props.userId}/>
          <Table userId = {this.props.userId}/>
        </div>
    );
  }
}

class Hello2 extends Component {
  render() {
    let uId = this.props.match.params.id;
    console.log(uId);
    return (
        <Hello userId = {uId}/>
    );
  }
}


class Login extends Component {
  render() {
    return (
        <div>
          <LoginC />
        </div>
    );
  }
}


render((
        <HashRouter >
          <div>
              <Route exact path='/' component={Login}/>
              <Route path='/dashboard/:id' component={Hello2}/>
          </div>
        </HashRouter >
    ), document.getElementById('app'));

