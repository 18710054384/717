import React, {Component} from 'react'
import './login.scss'
import $http from '../../utils/http'
import { message } from 'antd'

class Login extends Component{
    constructor(){
        super()
    }
    toRegister(){
        let { history } = this.props 
        history.push('/register')
    }
    toLogin(e){
        let { username, password } = this.refs
        $http.post('/user/login',{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            if(res.success==1){
                let from = this.props.location.state ? this.props.location.state.from || '/index/home':'/index/home'
                message.info('登录成功！')
                document.cookie="token="+res.token
                this.props.history.push(from)
            }else{
                message.info('登录失败！')
            }
        })
    }
    render(){
        return <div id="login-box">
            <div className="login-header">
                <span> {'<'} </span>
                <h3>登录会员</h3>
                <span className="text-red" onClick={this.toRegister.bind(this)} >注册</span>
            </div>
            <div className="login-content">
                <p>
                    <label>账号：</label>
                    <input type="text" className="username" ref="username"/>
                </p>
                <p> 
                    <label>密码：</label>
                    <input type="password" className="password" ref="password" />
                </p>
                <p><button onClick={this.toLogin.bind(this)}>登录</button></p>
            </div>
        </div>
    }
}

export default Login