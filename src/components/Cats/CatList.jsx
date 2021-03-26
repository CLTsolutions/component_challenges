import React, { Component } from 'react';
export default class CatList extends Component { 
  render() {
    return (
      <div>
        {this.props.cats.map((cat, index) => <li key={index}>{cat}</li>)}
      </div>
    )
  }
}

// functional component example
// const CatList = (props) => {
//   return (
//     <div>
//       {props.cats.map((cat, index) => <li key={index}>{cat}</li>)}
//     </div>
//   )
// };
 
// export default CatList;