import React, {Component} from 'react'
import './register.scss'
import $http from '../../utils/http'
import { message } from 'antd'

class Register extends Component{
    constructor(){
        super()
    }
    toLogin(){
        let { history } = this.props 
        history.push('/login')
    }
    toRegister(e){
        let { user, password } =this.refs
        if(user.value !=='' && password.value !==''){
            $http.post('/user/register',{
                username:user.value,
                password:password.value
            })
            .then(res=>{
                if(res.success==1){
                    message.info("注册成功！")
                }
            })
        }else{
            message.info('登录失败！')
        }
        
    }
    render(){
        return <div id="register-box">
            <div className="register-header">
                <span onClick={this.toLogin.bind(this)}> {'<'} </span>
                <h3>注册会员</h3>
                <span className="text-red" onClick={this.toLogin.bind(this)} >登录</span>
            </div>
            <div className="register-content">
                <p>
                    <label>账号：</label>
                    <input type="text" className="username" ref="user" />
                </p>
                <p> 
                    <label>密码：</label>
                    <input type="password" className="password" ref="password" />
                </p>
                <p><button className="button" onClick={this.toRegister.bind(this)}>注册</button></p>
            </div>
        </div>
    }
}

export default Register