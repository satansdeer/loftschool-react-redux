import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import {addUser, removeAllUsers} from './actionCreators/users';

let id = 0;
class App extends Component {

  state = {count: 0}

  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {

    const {users, addUser, removeAllUsers} = this.props;

    return (
      <div>
        <button onClick={() => addUser(id, `Alexander ${id++}`)}>Добавить пользователя</button>
        <button onClick={removeAllUsers}>Удалить всех</button>

        <button onClick={this.handleIncrement} >Increment</button>

        <p>{
          `Value: ${this.state.count}`
        }</p>
        {users.map(user => (
          <p key={user.id}>{`User: ${user.name}, id: ${user.id}`}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = {
  addUser,
  removeAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
