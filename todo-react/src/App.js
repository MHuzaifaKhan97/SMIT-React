import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [{ title: "Learn ReactJS", edit: false }, { title: "Learn Redux", edit: false }],
      value: ''
    }
  }

  addTodo = () => {
    let todoObj = { title: this.state.value, edit: false }
    this.setState({
      todos: [...this.state.todos, todoObj],
      value: '',
    })
  }
  removeAll = () => {
    this.setState({
      todos: []
    })
  }
  removeTodo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }

  editTodo = (index) => {
    //  1.
    // let todo = prompt("Enter Something..");
    // this.state.todos[index] = todo;
    // this.setState({
    //   todos:this.state.todos
    // })

    // 2.
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }
  handleChange = (e, index) => {
    this.state.todos[index].title = e.target.value
    this.setState({
      todos: this.state.todos
    })
  }
  updateTodo = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos,
      value: ''
    })
  }

  render() {
    let { todos, value } = this.state;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
          <a href="#" className="navbar-brand font-weight-bold display-2"><i className="fas fa-archive" ></i> TODO CRUD</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 my-4">
              <div className="form-group">
                <input value={value} type="text" onChange={(e) => this.setState({ value: e.target.value })} placeholder="Enter Something..." className="form-control" />
              </div>
              <div className="form-group text-center">
                <button onClick={this.addTodo} className='btn btn-primary mx-2 btn-lg' > <i className="fas fa-plus" ></i> Add Item</button>
                <button onClick={this.removeAll} className='btn btn-danger mx-2 btn-lg'> <i className="fas fa-times" ></i> Remove All</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <ul>
                {
                  todos.map((todo, index) => {
                    return <li key={index} className="list-items py-3" >
                      {todo.edit ? <input type="text" value={todo.title} onChange={(e) => this.handleChange(e, index)} /> :<span> <i className="fas fa-arrow-right mx-3" ></i>  {todo.title}</span> }

                      <span style={{ float: 'right' }}>
                        {todo.edit ?
                          <button className="btn btn-warning mx-2 text-white" onClick={() => this.updateTodo(index)} > Update </button>
                          : <button className="btn btn-warning mx-2" onClick={() => this.editTodo(index)} ><i className="fas fa-edit" ></i></button>
                        }
                        <button className="btn btn-danger" onClick={() => this.removeTodo(index)} ><i className="fas fa-times" ></i></button>
                      </span>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default App;
