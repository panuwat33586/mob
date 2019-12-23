



import React, { Component } from 'react'
import { Button, Carousel } from 'antd';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: ['https://i1.wp.com/www.shorteng.com/wp-content/uploads/2015/12/photo.jpg?resize=470%2C313',
       'https://miro.medium.com/max/2688/0*u399HI0s0ZJiyWbe.jpg'],
       index: 1,
       
    }
  }
  handleOnclick1 = e =>{
    this.setState({index : 0})
  }

  handleOnclick2 = e =>{
    this.setState({index : 1})
  }


  render() {

    return (
      <div>
        <Button onClick = {()=>this.handleOnclick1() }>
        click 1
        </Button >
        <Button onClick = {()=>this.handleOnclick2()}>
        click 2
        </Button >
     <div>
       <img src={this.state.background[this.state.index]} style={{width:'500 px'}}/>
     </div>
      
      </div>    )
  }
}
