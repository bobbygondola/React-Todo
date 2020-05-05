import React from 'react';
import ToDoList from './components/TodoList'
import ToDoForm from './components/TodoForm'


//dummyData
const toDo = [
  {
    task: 'Organize Garage',
    id: Math.floor(Math.random() * 24 + 1),
    completed: false
  },
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
      task: itemName,
      id: Math.floor(Math.random() * 24 + 1),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newItem]
    });
  }

  //toggle todo
  toggleItem = clickedId => {
    //no mutating
    //must create new
		const newToDoList = this.state.toDo.map((item) => {
      //loop through
      //find item we clicked (maybe index)
      //toggle items (completed) property
			if (item.id === clickedId) {
        //toggle completed
				return {
					...item,
					completed: !item.completed
				};
			} else {
				return item;
			}
    });

		this.setState({
			toDo: newToDoList
		});
	};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo List!</h2>
        {/* <Todo /> */}
        <ToDoList toDo={this.state.toDo} addItem={this.addItem} toggleItem={this.toggleItem} />
        <ToDoForm todo={this.state.todo} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
