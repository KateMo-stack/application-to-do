import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  //state object i todo property
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},//dwa property 
      {id: 2, content: 'play mario kart'}
    ]

  }
  deleteTodo = (id) => {
    // console.log(id);
    const maslo = this.state.todos.filter(todo => {
      return todo.id !== id
    });
      this.setState({
        //key and the value has the same name, co I can leave as todos only instead of todos: todos
        todos: maslo
      })
  }
  addTodo = (todo) => { //objekt
 
    todo.id = Math.floor(Math.random()*10000);
    // console.log(todo.id);
    //creating new array, because we cann not use below directly:
    let smietanka = [...this.state.todos, todo];//dextrukturyzacja - wyciąga elementy ze środka, nie ma tablicy, tylko elementy z tablicy... a następnym eelementem tej tablicy jest todo
    this.setState({
      todos: smietanka
    })

  }

  render() {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo nowanazwa={this.addTodo} />
    </div>
  );
 }
}

export default App;
