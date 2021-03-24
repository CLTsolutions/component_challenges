import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {this.props.breeds.map(cat => <li>cat</li> )}
   </div>
 )
}
 
CatList;