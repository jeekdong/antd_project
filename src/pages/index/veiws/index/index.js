import React, { Component } from 'react'
import { Button } from 'antd'
import Hello from '@src/components/Hello/hello'

class Index extends Component {
    state = {}

    render() {
        return (
            <div className="App index">
                <h1>A new page</h1>
                <Button>example</Button>
                <Hello />
            </div>
        )
    }
}

export default Index
