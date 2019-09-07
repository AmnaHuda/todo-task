import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToggleButtonGroup, ToggleButton, Form } from 'react-bootstrap'

import { ToggleTodo } from '../Actions'
 
class ListContainer extends Component {
    constructor() {
        super()
        this.state = {
            value: 1
        }
    }
    toggleTodo = (checked, index, id) => {
        this.props.ToggleTodo(index, id, checked)
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column' }}>
                <ToggleButtonGroup type="radio" size="sm" name="filter" value={this.state.value} onChange={(value) => { this.setState({ value }) }}>
                    <ToggleButton value={1}>Todo</ToggleButton>
                    <ToggleButton value={2}>Done</ToggleButton>
                </ToggleButtonGroup>

                <div className="our-box-shadow" style={{ maxWidth: '600px', minWidth: '50%', padding: 15,marginTop: 10,  borderRadius: 10, border: '1px dotted #6c5ce7' }}>
                    {
                        this.props.todolist.length === 0 ?
                        <p style={{ textAlign: 'center' }}>You dont have any todo's</p>
                        :
                        null
                    }
                    {
                        this.props.todolist.map((todo, index) => {
                            console.log(todo,!todo.isDone, this.state.value === 1, !todo.isDone && this.state.value === 1 )
                            if(!todo.isDone && this.state.value === 1) {
                                return (
                                    <div key={index} className="hover-shadow" style={{ display:'flex', flexDirection:'row', margin: 10, padding: 5, borderRadius: 10 }}> 
                                        <div>
                                            <Form.Check 
                                                value={todo.isDone}
                                                checked={todo.isDone}
                                                onChange={(e) => {
                                                    this.toggleTodo(e.target.checked, index, todo._id)
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p style={{ marginBottom: 0 }}>{todo.title}</p>
                                            <p style={{ color: 'silver' }}>{todo.description}</p>
                                        </div>
                                    </div>
                                )
                            } else if(todo.isDone && this.state.value === 2) {
                                return (
                                    <div key={index} className="hover-shadow" style={{ display:'flex', flexDirection:'row', margin: 10, padding: 5, borderRadius: 10 }}> 
                                        <div>
                                            <Form.Check 
                                                value={todo.isDone}
                                                checked={todo.isDone}
                                                onChange={(e) => {
                                                    this.toggleTodo(e.target.checked, index, todo._id)
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginLeft: 10 }}>
                                            <p style={{ marginBottom: 0 }}>{todo.title}</p>
                                            <p style={{ color: 'silver' }}>{todo.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                            
                        })
                    }
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todolist: state.todolist
})

const mapDispatchToProps = {
    ToggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)