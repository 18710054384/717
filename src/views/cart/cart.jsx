import React, {Component} from 'react'
import $http from '../../utils/http'
import { getCookie } from '../../utils/utils'
import { connect } from 'react-redux'
import mapStateToProps from './state.js'
import mapDispatchToProps from './dispatch.js'
import './cart.scss'

class Cart extends Component{
    render(){
        let { cartList, updateCount } = this.props
        return <div id="cart">
            <header>
                购物车
                <span className="edit">编辑</span>
            </header>
            <div className="goods-list">
                <ul>
                    {
                        cartList.map((item,index)=>{
                            return <li key={index}>
                                <span className="select-btn">
                                    <input type="checkbox"/>
                                </span>
                                <span className="goods-img">
                                    <img src={item.goods_img} alt=""/>
                                </span>
                                <div className="goods-text">
                                    <p>{item.goods_name}</p>
                                    <div className="goods-count">
                                        <div>
                                            <p className="f28">x{item.count}</p>
                                            <p className="text-red f28">￥{item.discount_price}</p>
                                        </div>
                                        <div>
                                            <span onClick={()=>{this.updateCount(--item.count,item.goods_id)}}>-</span>
                                            <span>{item.count}</span>
                                            <span onClick={()=>{this.updateCount(++item.count,item.goods_id)}}>+</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
    componentDidMount(){
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)