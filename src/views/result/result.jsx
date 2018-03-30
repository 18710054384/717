import React, {Component} from 'react'

class Result extends Component{
    render(){
        return <div>Result</div>
    }
    componentDidMount(){
        console.log(this.props)
    }
}

export default Result