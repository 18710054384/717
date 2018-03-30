import React, {Component} from 'react'

class Detail extends Component{
    render(){
        return <div>detail</div>
    }
    componentDidMount(){
        console.log(this.props)
    }
}

export default Detail