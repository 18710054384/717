import React, { Component } from 'react'
import $http from '../../utils/http'
import SwiperComponent from '../../components/swiper/swiperComp'
import './home.scss'
import GoodsItem from '../../components/goodsComp'

class Home extends Component{
    constructor(){
        super()
        this.state={
            goodslist:[],
            channel_id:1,
            caniquery:true
        }
        this.toSearch=this.toSearch.bind(this)
    }
    componentDidMount(){
        $http.post('/mell/index/getGoodsChannel',{channel_id:this.state.channel_id})
        .then(res=>{
            this.setState({
                goodslist:res.data.list
            })
        })
    }
    toSearch(){
        let { history } = this.props
        history.push('/index/search')
    }
    scrolling(){
        if(this.state.channel_id>9){
            this.refs.show.className="show";
            return;
        }
        if(!this.state.caniquery) return;
        let st = this.refs.scroller.scrollTop
        let sw = this.refs.scroller.offsetHeight;
        let dh = this.refs.doc.offsetHeight;
        if(dh-(st+sw)<50){
            this.setState({
                caniquery:false,
                channel_id:++this.state.channel_id
            })
            console.log('请求成功')
            let {goodslist} = this.state
            $http.post('/mell/index/getGoodsChannel',{channel_id:this.state.channel_id})
            .then(res=>{
                this.setState({
                    goodslist:[...goodslist,...res.data.list],
                    caniquery:true
                })
            })
        }
    }
    render(){
        return <div id="home" onScroll={this.scrolling.bind(this)} ref="scroller">
                    <div ref="doc">
                        <header>
                            <div className="header-logo"><img src={require('../../static/img/logo.gif')} alt=""/></div>
                            <div className="header-search">
                                <span className="iconfont icon-sousuo"></span>
                                <input type="text" onFocus={this.toSearch} placeholder="请输入您要搜索的商品"/>
                            </div>
                            <div className="header-hotel">
                                <span className="iconfont icon-dianpu text-red"></span>
                                <span className="text-red">我的店铺</span>
                            </div>
                        </header>
                        <div>
                            <SwiperComponent></SwiperComponent>
                        </div>
                        <section className="clear">
                            <dl>
                                <dt><img src={require('../../static/img/1.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/2.png')} alt=""/></dt>
                                <dd>进口食品</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/3.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/4.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/4.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/3.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/2.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                            <dl>
                                <dt><img src={require('../../static/img/1.png')} alt=""/></dt>
                                <dd>家乡味道</dd>
                            </dl>
                        </section>
                        <div className="goods-list clear">
                        {
                            this.state.goodslist.map((item,ind)=>{
                                return <GoodsItem key={ind} data={item} history={this.props.history}></GoodsItem>
                            })
                        }
                        </div>
                        <p className="hide" ref="show">我是有底线的</p>
                    </div>
                </div>
    }
}

export default Home