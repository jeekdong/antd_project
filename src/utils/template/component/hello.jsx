import React, { Component } from 'react';
import { Button } from 'antd';
<% if(this.needCss) { %>
import './<%= this.name %>.scss';
<% } %>

class <%= this.Name %> extends Component {
    state = {};

    render() {
        return (
            <div className="<%= this.name %>">
                <h1>A Component <%= this.name %></h1>
                <Button>example</Button>
            </div>
        )
    }
}

export default <%= this.Name %>
