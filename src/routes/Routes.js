import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import CreateItem from '../screen/CreateItem'
import { Table } from '../screen/Table'

import ConditionalRenderUpdateItem from '../screen/ConditionalRenderUpdateItem'



export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={Table} />
                    <Route exact path='/create' component={CreateItem} />
                    <Route exact path='/update/:id' component={ConditionalRenderUpdateItem} />

                    <Redirect to='/' />
                </Switch>
            </Router>
        </div>
    )
}
