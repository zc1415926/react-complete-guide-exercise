import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Ste', age:26}
    ]
  }

  switchNameHandler = (newName)=>{
    //console.log('Was clicked!');

    this.setState({persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age:27}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age:27}
    ]});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello create-react-app</h1>
          <button 
          style={style}
          onClick={() => this.switchNameHandler('MMMM!')}>Switch Name</button>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}></Person>
          
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
         
          click={/**use this not ()=> */this.switchNameHandler.bind(this, 'Maxmax')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}></Person>
        </header>
      </div>
    );
  }
}

export default App;
