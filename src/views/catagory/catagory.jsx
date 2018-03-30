import React, {Component} from 'react'
import './catagory.scss'
import $http from '../../utils/http'

class Catagory extends Component{
    constructor(){
        super()
        this.state={
            activeIndex:0,
            catagoryitem:null
        }
    }
    toogleActive(ind){
        this.setState({
            activeIndex:ind
        })
         $http.get('/catagory',{sonid:ind+1})
        .then(res=>{
            if(res.success==1){
                this.setState({
                    catagoryitem:res.data[ind]
                })
            }
        })
    }
    componentDidMount(){
       
    }
    render(){
        let catlist = ['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味调料','酒水饮料']
        return <div id="catagory">
            <header>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text"placeholder="请输入你要购买的商品" />
                </div>
            </header>
            <section>
                <div className="catagory-left">
                    <ul>
                        {
                            catlist.map((item,index)=>{
                                return <li className={this.state.activeIndex==index?'active':''} 
                                    key={index} 
                                    onClick={()=>{this.toogleActive(index)}} 
                                    >{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="catagory-right">
                    {
                        this.state.catagoryitem==null? '...':this.state.catagoryitem.type.map((item,index)=>{
                            return <div key={index}>
                                <img src={item.img} alt=""/>
                                <span>{item.title}</span>
                            </div>
                        })
                    }
                </div>
            </section>
        </div>
    }
}

export default Catagory