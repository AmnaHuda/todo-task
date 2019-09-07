import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from './Components/Input'
import ListContainer from './Components/ListContainer'

import { GetTodosFromServer } from './Actions'

class App extends Component {
    componentDidMount() {
        this.props.GetTodosFromServer()
    }
    render() {
        return (
            <div>
                <header style={{ marginBottom: 20, marginTop: 10, marginLeft: 10, background:"silver", height:"50px", textAlign:"center", paddingTop:"10px"  }}>
                    <span style={{ fontWeight: '400', fontSize: 18 }}>Your Todo's</span>
                </header>
                <Input/>
                <br/>
                
                <ListContainer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    GetTodosFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

