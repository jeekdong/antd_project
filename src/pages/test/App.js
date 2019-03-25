import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Test from './veiws/test'

class App extends Component {
    componentWillMount() {
        document.title = '测试页面'
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Test} />
                </div>
            </Router>
        )
    }
}

export default App
