import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import './swiperComp.scss'

class SwiperComponent extends Component{
    render(){
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={require('../../static/img/1.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/2.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/3.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/4.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/5.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/6.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/7.jpg')} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={require('../../static/img/8.jpg')} alt=""/>
                </div>
            </div>
        </div>
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            loop:true
        })
    }
}

export default SwiperComponent
