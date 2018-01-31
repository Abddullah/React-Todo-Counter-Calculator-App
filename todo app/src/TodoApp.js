import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputValue: "",
      flag: false
    }
    this.formHandler = this.formHandler.bind(this)
    this.todosAdd = this.todosAdd.bind(this)
    this.todosUpdate = this.todosUpdate.bind(this)
    this.clearTodos = this.clearTodos.bind(this)

  }

  formHandler(ev) {
    this.setState({
      inputValue: ev.target.value,
    })
  }

  todosAdd() {
    if (this.state.inputValue === "") {
      alert("Please Add todo.")
    }
    else {
      let cloneInputValue = this.state.inputValue;
      let cloneTodosArray = this.state.todos;
      this.setState({
        cloneTodosArray: cloneTodosArray.push(cloneInputValue),
        inputValue: ""
      })
    }

  }

  deleteTodo(index) {
    let cloneTodosArray = this.state.todos;
    this.setState({
      cloneTodosArray: cloneTodosArray.splice(index, 1),
    })
  }

  editTodo(index) {
    let cloneEditIndexText = this.state.todos[index];
    this.setState({
      flag: true,
      inputValue: cloneEditIndexText,
      editIndex: index
    })
  }

  todosUpdate() {
    let cloneInputValue = this.state.inputValue;
    let cloneTodosArray = this.state.todos;
    let cloneTodosIndex = this.state.editIndex
    cloneTodosArray.splice(cloneTodosIndex, 1, cloneInputValue)
    this.setState({
      todos: cloneTodosArray,
      inputValue: "",
      flag: false,
    })
  }


  clearTodos() {
    this.setState({
      todos: [],
      inputValue: "",
      flag: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo Application</h1>
          <h1 className="App-title">Version 0.5 with Using React and bootstrap.Batch 4.1 Roll 5216</h1>
        </header><hr/><hr/>
        <br /><br />
        <div className="input-width">



          <div className="input-group">
            <input type="text" className="form-control" placeholder="Please add todo..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.inputValue} onChange={this.formHandler} />
            <div className="input-group-append">

              {
                (this.state.flag === false) ?
                  (<button className="btn btn-secondary btnHeight" type="button" onClick={this.todosAdd}>Add</button>) :
                  (<button className="btn btn-outline-secondary btnHeight" type="button" color="info" onClick={this.todosUpdate}>Update</button>)
              }
              <button className="btn btn-outline-secondary btnHeight" type="button" onClick={this.clearTodos}>Clear</button>
            </div>
          </div><br/><br/>
          <ol className="list-group">
            {
              this.state.todos.map((todos, index) => {
                return (
                  <li className="list-group-item liAlign" key={index}>
                    {todos}
                    <button className="btn btn-outline-warning btnMargin" onClick={this.editTodo.bind(this, index)} >Edit</button>
                    <button className="btn btn-outline-danger btnMargin" onClick={this.deleteTodo.bind(this, index)} >Delete</button>
                  </li >
                )
              })
            }
          </ol>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/><hr/>
        </div>
      </div>
    );
  }
}

export default Todo;
