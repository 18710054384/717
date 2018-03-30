import React, { Component } from 'react'
import Index from '../views/index'
import Home from '../views/home'
import Detail from '../views/detail'
import Catagory from '../views/catagory'
import Cart from '../views/cart'
import Mine from '../views/mine'
import List from '../views/list'
import Search from '../views/search'
import Login from '../views/login'
import Register from '../views/register'
import Result from '../views/result'
//404页面
import NoMatch from '../views/router404/nomatch'

// function Index(){
//     return <h1>index</h1>
// }

let router = {
    routes:[
        {
            path:'/detail',
            component:Detail
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:"/index",
            component:Index,
            children:[
                {
                    path:'/index/home',
                    component:Home
                },
                {
                    path:'/index/catagory',
                    component:Catagory
                },
                {
                    path:'/index/cart',
                    component:Cart
                },
                {
                    path:'/index/mine',
                    component:Mine,
                    autherization:true
                },
                {
                    path:'/index/search',
                    component:Search
                },
                {   
                    path:'/index/result',
                    component:Result
                }
            ]
        }
    ]
}

export default router