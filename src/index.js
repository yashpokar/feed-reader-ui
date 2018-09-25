import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './screens/Home'
import './assets/css/app.css'

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Home}></Route>
        </div>
    </Router>,
    document.getElementById('root')
)
