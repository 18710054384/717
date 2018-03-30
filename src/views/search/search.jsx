import React, {Component} from 'react'
import './search.scss'

class Search extends Component{
    constructor(){
        super()
        this.state={
            historylist:[]
        }
    }
    toSearch(){
        const {history} = this.props
        if(!this.refs.search.value)return;
        let keyWords = this.refs.search.value;
        let ls = localStorage;
        if(ls.getItem('SearchHistory')){
            let shArr = JSON.parse(ls.getItem('SearchHistory'));
            if(shArr.indexOf(keyWords)>-1)return;
            shArr.push(keyWords);
            ls.setItem('SearchHistory',JSON.stringify(shArr))
        }else{
            ls.setItem('SearchHistory',JSON.stringify([keyWords]))
        }
        history.push('/index/result',{
            key_word:keyWords
        })
    }
    componentDidMount(){
        if(localStorage.getItem('SearchHistory')){
            this.setState({
                historylist:JSON.parse(localStorage.getItem('SearchHistory'))
            })
        }
    }
    clearHistory(){
        localStorage.removeItem('SearchHistory')
        this.setState({
            historylist:[]
        })
    }
    render(){
        return <div id="search">
            <header>
                <div className="header-search">
                    <span className="iconfont icon-sousuo"></span>
                    <input type="text" ref="search" placeholder="请输入您要购买的商品" />
                </div>
                <span onClick={this.toSearch.bind(this)}>搜索</span>
            </header>
            <section>
                <div>
                    <p>
                        <span>最近搜索</span>
                        <span onClick={this.clearHistory.bind(this)} className="iconfont icon-shanchu"></span>
                    </p>
                    <div className="history">
                       {
                            this.state.historylist.length==0 ?'暂无搜索记录...':
                             this.state.historylist.map((item,index)=>{
                                return <span key={index}>{item}</span>
                            })
                       }
                    </div>
                </div>
                <div>
                    <p><span>大家都在搜</span></p>
                    <div  className="history">
                       <span>粽子</span>
                       <span>锅巴</span>
                       <span>酱</span>
                       <span>小吃</span>
                       <span>零食</span>
                       <span>干果</span>
                       <span>特产</span>
                       <span>油</span>
                       <span>大米</span>
                       <span>面粉</span>
                    </div>
                </div>
            </section>
        </div>
    }
}

export default Search