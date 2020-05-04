import React from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'
//dummyData

const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo,
    }
  }

  //methods
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newItem]
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        <ToDoList toDo={this.state.toDo} />
        <ToDoForm todo={this.state.todo} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
