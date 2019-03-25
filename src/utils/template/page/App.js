import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import $View from './veiws/$view'

class App extends Component {
    componentWillMount() {
        document.title = '$title'
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={$View} />
                </div>
            </Router>
        )
    }
}

export default App
