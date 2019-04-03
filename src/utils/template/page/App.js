import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import <%= this.View %> from './veiws/<%= this.view %>';

class App extends Component {
    componentWillMount() {
        document.title = '<%= this.title %>';
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={<%= this.View %>} />
                </div>
            </Router>
        )
    }
}

export default App
