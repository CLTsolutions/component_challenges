import React, { Component } from 'react';
import { Input } from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        'pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 
        'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 
        'laminator', 'laminating sheets', 'protective sheets', 'index cards'
      ],
      results: []
    }
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction(value) {
    let results = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
    this.setState({ results: results})
    // console.log(this.state.searchTerm);
  }
  
  displaySearchItem = (newThings, index) => <p key={index}>{newThings}</p>

  render () {
    return (
      <div>
        <Input
          type='text'
          value={this.state.searchTerm} 
          placeholder='Search Here'
          onChange={e => this.searchFunction(e.target.value)}  
        />
        <br />
        <br />
        <h3>Results:</h3>
          {this.state.results && this.state.results.length > 0
            ? this.state.results.map(this.displaySearchItem)
            : this.state.things.map(this.displaySearchItem)
          }
      </div>
    )
  }
}