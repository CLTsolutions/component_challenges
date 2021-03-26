import React, { Component } from 'react';
import { Input } from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: ''
    }
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction(e) {
    this.setState({ searchTerm: e.target.value })
    // console.log(this.state.searchTerm);
  }
  
  render () {
    return (
      <div>
        <Input
          type='text'
          value={this.state.searchTerm} 
          placeholder='Search Here'
          onChange={e => this.searchFunction(e)}  
        />
        <br />
        <br />
        <h3>Results:</h3>
          {this.state.things.filter(thing => thing.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((newThings, index) => <p key={index}>{newThings}</p>)}
      </div>
    )
  }
}