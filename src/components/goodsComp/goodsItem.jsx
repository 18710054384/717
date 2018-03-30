import React, { Component } from 'react'
import $http from '../../utils/http'
import './goodsItem.scss'
import Lazyload from 'react-lazyload'
import { getCookie } from '../../utils/utils'
import { message } from 'antd'
import { connect } from 'react-redux'
import { ADD_CART } from './../../store/reducer'

class Placeholder extends Component{
    render(){
        return <img src={require('../../static/img/goods/timg.jpg')} alt=""/>
    }
}

class GoodsItem extends Component{
    render(){
        let { data } = this.props
        return <dl className="goods-item" onClick={()=>{this.toDetail(data.goods_id)}}>
            <dt>
                <Lazyload 
                        height={'100%'} 
                        placeholder={<Placeholder/>} 
                        debounce={200} 
                        overflow
                        once>
                    <img src={data.goods_img} alt=""/>
                </Lazyload>
            </dt>
            <dd>
                <p className="goods-detail text-nobr">{data.goods_name}</p>
                <p>
                    <span className="goods-price text-red f26">￥{data.discount_price}.00</span>
                    <span onClick={this.addCart.bind(this)} ref="icon" className="iconfont icon-gwc f36"></span>
                </p>
            </dd>
        </dl>
    }
    addCart(e){
       e.stopPropagation();
       let { data } = this.props
       if(getCookie('token')){//判断是否登录
            $http.post('/user/shoppingCart',{
                goods_id:this.props.goods_id,
                goods_info:data,
                token:getCookie('token')
            })
            .then(res=>{
                message.info(res.info)
                if(res.success==1){
                    this.refs.icon.style.color+='red'
                    this.props.dispatch({
                        type: ADD_CART,
                        data:{
                           ...data,
                           count:1
                        }
                    })
                }else{
                    let {history} = this.props;
                    this.props.history.push('/login',{
                        from:history.location.pathname
                    })
                }
            })
        }else{
            message.info('请先登录！')
            let {history} = this.props;
			this.props.history.push('/login',{
				from:history.location.pathname
			})
        }
    }
    toDetail(goods_id){
        this.props.history.push('/detail?goods_id='+goods_id)
    }
}


export default connect(null)(GoodsItem)