import React, { Component } from 'react'
import { Button, Form, Input } from 'reactstrap'


export default class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: '',
            taskItems: []
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    onChange (e) {
        this.setState({ task: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        // prevents submission of no value
        if (this.state.task !== '') {
            this.setState({
                // task: '' clears input upon submission
                task: '',
                taskItems: [...this.state.taskItems, this.state.task],
            })
        }
    }

    deleteTask (index) {
        const deletedTask = this.state.taskItems
        deletedTask.splice(index, 1)
        this.setState({ taskItems: deletedTask })
        // console.log(this.state.taskItems)
    }

    displayTask = (item, index) => {
        return (
            <>
                <li key={index}>{item}</li>
                <Button onClick={() => this.deleteTask(index)}>Completed</Button>
            </>
        )
    }

    render () {
        return (
            <div>
                <h1>To Do List:</h1>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        type='text'
                        value={this.state.task} 
                        onChange={this.onChange}
                        placeholder='Type in a task here...'
                    />
                    <br />
                    <Button onClick={this.onSubmit}>Submit</Button>
                    <hr />
                </Form>
                {this.state.taskItems.length > 0
                ? <ol>{this.state.taskItems.map(this.displayTask)}</ol>
                : <p>You have no tasks for today. Jazz Hands!</p>}
            </div>
        )
    }

}