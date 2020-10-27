import React, { Component } from 'react'
import "./App.css";
import { connect } from 'react-redux';
import {setData} from './store/action';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Hello Redux</h1>
        <h2>{this.props.app}</h2>
        <h3>{this.props.name}</h3>
        <h3>{this.props.email}</h3>
        <button onClick={this.props.setData} >Set Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  app: state.app.app_name
})
const mapDispatchToProps = (dispatch) => ({
  setData: () => dispatch(setData("Shakoor","shakoor@gmail.com"))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);