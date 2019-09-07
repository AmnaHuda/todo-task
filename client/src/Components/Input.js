import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

import { AddTodoItem } from '../Actions'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            description: "",
            title: ""
        }
    }
    addtodo = (e) => {
        e.preventDefault()
        this.props.AddTodoItem(this.state.title, this.state.description)
        this.setState({
            title: '',
            description: ''
        })
    }
    render() {
        console.log('Props:', this.props)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'  }}>
                <Form onSubmit={this.addtodo} className="our-box-shadow" style={{ maxWidth: '300px', minWidth: '30%', padding: 10, borderRadius: 10}}>
                    <Form.Group controlId="title">
                        <Form.Label style={{  }}>Title</Form.Label>
                        <Form.Control value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value })}} style={{ border: '1px solid rgba(108, 92, 231,0.1)'}} type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label style={{  }}>Description</Form.Label>
                        <Form.Control value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value })}} style={{ border: '1px solid rgba(108, 92, 231,0.1)'}} placeholder="Description" as="textarea" rows="2" />
                    </Form.Group>

                    <div style={{ textAlign: 'center' }}>
                        <Button variant="primary"  size="sm" type="submit">
                            Submit
                        </Button>
                    </div>
                    
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    AddTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
