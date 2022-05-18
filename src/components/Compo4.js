import { Component } from "react";

class Child extends Component {
  render() {
    return(
      <div>
        <p>{this.props.msg}</p>
        {/* 在子组件中定义回调函数, 触发该回调函数将会修改父组件的值 */}
        <button onClick={this.childHandle.bind(this)}>子组件按钮</button>
      </div>
    )
  };

  childHandle() {
    // 接收父组件传递给子组件的函数, 该函数能够修改父组件的值
    this.props.changeParent();
  };
}

export default class Compo4 extends Component {
  state = {
    parentMsg: "父组件的值",
    parentNum: 10,
  }

  render() {
    return(
      <div>
        <h1>我是子组件4</h1>
        {/* 父组件向子组件传值、传递修改父组件值的函数 */}
        <Child msg={this.state.parentMsg} num={this.state.parentNum} changeParent={this.handleChange.bind(this, 2)}></Child>
        <p>父组件的值为:{this.state.parentNum}</p>
      </div>
    )
  };

  // 在父组件中定义函数, 通过该函数修改父组件传递给子组件的值
  handleChange(val) {
    this.setState({
      parentNum: this.state.parentNum+val,
    });
  };
}