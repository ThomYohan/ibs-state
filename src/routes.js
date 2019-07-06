import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'


export default (
    <HashRouter>
        <Switch>
            <Route path ='/' component={Landing} exact />
        </Switch>
    </HashRouter>
)