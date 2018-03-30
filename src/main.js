import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import router from './router/router.config'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import RouterWrapper from './components/routeWrapper'
import 'antd/dist/antd.css'
import './static/css/reset.css'
import './static/font/iconfont.css'
import './utils/fontset'
import './static/css/common.css'
import './static/css/class.css'
import NoMatch from './views/router404/nomatch';


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Redirect exact from="/" to="/index/home"></Redirect>
            <RouterWrapper routes={router.routes}></RouterWrapper>
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)