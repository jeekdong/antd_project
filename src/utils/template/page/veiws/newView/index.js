import React, { Component } from 'react'
import { Button } from 'antd'
import './index.scss'

class $View extends Component {
    state = {}

    render() {
        return (
            <div className="App $view">
                <h1>A new page</h1>
                <Button>example</Button>
            </div>
        )
    }
}

export default $View
