import React,{Component} from 'react'

export default class CounterArrow extends Component{
    state = {counter:4}
    increment =()=> {
        this.setState({counter: this.state.counter + 1})
    }
    decrement =()=> {
        this.setState({counter: this.state.counter - 1})
    }

    render(){
        return(
            <div>
                <h1> Counter Arrow : {this.state.counter}</h1>
                <button onClick={this.increment}> + </button>
                <button onClick={this.decrement}> - </button>
            </div>
        )
    }
}