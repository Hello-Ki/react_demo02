import React, { Component } from "react";

export default class Compo2 extends Component {
  constructor (props) {
    super(props);
    // 定义组件内部数据
    this.state = {
      msg: "我是子组件2",
      count: 0,
    };
  };
  render() {
    return(
      <div>
        {/* 在模板上获取组价内部数据, 需要通过this.state.变量名 */}
        <p>{this.state.msg}</p>
        <p>{this.state.count}</p>
        {/* <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button> */}
      </div>
    )
  };
  // add() {
  //   console.log("点击+按钮");
  //   this.setState({
  //     count: this.state.count+1,
  //   });
  // };
  // sub() {
  //   console.log("点击-按钮");
  //   this.setState({
  //     count: this.state.count-1,
  //   });
  // }
}