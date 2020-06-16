import React, { Component } from 'react';
import axios from 'axios';
import { CardList } from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    this.setState({ monsters: res.data });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // filter the array if any element contains the search key word, then return to a new array.
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
