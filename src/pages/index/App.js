import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Index from './veiws/index'

class App extends Component {
    componentWillMount() {
        document.title = '首页'
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Index} />
                </div>
            </Router>
        )
    }
}

export default App
