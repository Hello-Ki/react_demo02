import React, { Component } from "react";

export default class Compo2 extends Component {
  constructor (props) {
    super(props);
    // 定义组件内部数据
    this.state = {
      msg: "我是子组件2",
      count: 0,
    };
    // 事件处理函数, 可直接在这里绑定this
  };
  render() {
    return(
      <div>
        {/* 在模板上获取组价内部数据, 需要通过this.state.变量名 */}
        <h1>{this.state.msg}</h1>
        <p>{this.state.count}</p>
        {/* 若绑定的事件处理函数中需要使用this, 则在调用函数时提前绑定this */}
        <button onClick={this.add.bind(this)}>+</button>
        {/* 事件处理函数可使用箭头函数, 不需要绑定this */}
        <button onClick={() => this.sub()}>-</button>
      </div>
    );
  };
  add() {
    // 修改内部数据需要使用this.setState
    // this.setState是异步处理函数, 若要使用修改后的数据, 在this.setState的第二个参中用箭头获取修改后的新数据
    this.setState({
      count: this.state.count+1,
    }, () => {
      console.log(this.state.count);
    });
  };
  sub() {
    this.setState({
      count: this.state.count-1,
    }, () => {
      console.log(this.state.count);
    });
  };
}