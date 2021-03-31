import React, { Component } from 'react';
import { Button } from 'reactstrap';
export default class DogIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            url: ''
        }
        this.fetchDogImg = this.fetchDogImg.bind(this)
    }

    handleClick () {
        this.fetchDogImg()
    }

    async fetchDogImg () {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const json = await response.json()
            console.log('JSON:', json);
            this.setState({
                //URL is returned as 'message': 'url'
                url: json.message
            })
        } catch(e) {
            console.log('Oops. Error! Try again.');
            console.log(e);
        }
    }

    render() {
        return (
            <>
            <h1>Dogs!</h1>
            <br />
            <Button onClick={() => this.handleClick()}>Fetch a Dog!</Button>
            <br />
            <br />
            <img src={this.state.url} style={{ width: '75%'}} />
            <br />
            <br />
            </>
        )
    }
}