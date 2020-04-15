import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import page
import Index from '../views/index/Index'
import List from '../views/list/Index'
interface Props {
  
}
interface State {

}
export default class App extends Component<Props, State> {
    render() {
        return (
            <Router basename="/lendingbaby">
                <Switch>
                    <Route path="/list" component={List}></Route>
                    <Route path="/" exact component={Index}></Route>
                </Switch>
            </Router>
        )
    }
}
