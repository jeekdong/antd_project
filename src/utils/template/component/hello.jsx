import React, { Component } from 'react'
import { Button } from 'antd'
import './$name.scss'

class $Name extends Component {
    state = {}

    render() {
        return (
            <div className="$name">
                <h1>A Component $name</h1>
                <Button>example</Button>
            </div>
        )
    }
}

export default $Name
