import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class RouteWrapper extends Component{
    render (){
        const {routes} = this.props
        return routes.map((item,index)=>{
            return <Route 
                    exact={item.exact}
                    key={index}
                    path={item.path} 
                    render={(location)=>{
                return <item.component 
                        {...location}   
                        routes={item.children}
                        ></item.component> 
            }}></Route>
        })
    }
}

export default RouteWrapper