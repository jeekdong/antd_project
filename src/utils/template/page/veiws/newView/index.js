import React, { Component } from 'react';
import { Button } from 'antd';

class <%= this.View %> extends Component {
    state = {};

    render() {
        return (
            <div className="App <%= this.view %>">
                <h1>A new page</h1>
                <Button>example</Button>
            </div>
        )
    }
}

export default <%= this.View %>
