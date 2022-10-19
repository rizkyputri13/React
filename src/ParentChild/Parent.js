import React,{Component} from 'react'
import Child from './Child'

export default class Parent extends Component{
    state = {
        firstName: 'naufal',
        lastName: 'firdaus'
    }

    render(){
        return(
            <div>
                <Child
                    firstname = {this.state.firstName}
                    lastname = {this.state.lastName}
                />
            </div>
        )
    }
}