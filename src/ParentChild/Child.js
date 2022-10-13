import React,{Component} from 'react'

export default class Child extends Component {
    render(){
        return(
            <div>
                <h1>first name : {this.props.firstname}</h1>
                <h1>last name : {this.props.lastname}</h1>
            </div>
        )
    }
}