import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Landing from './Components/Landing/Landing'
import Portfolio from './'


export default (
    <HashRouter>
        <Nav />
        <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/portfolio' component={Portfolio}
        </Switch>
    </HashRouter>
)