import { Component } from "react";
import PropTypes from "prop-types";

class Child extends Component {
  // 声明接收的值类型
  static contextTypes = {
    grandNum: PropTypes.number,
  }
  render() {
    return(
      <div>
        <p>我是孙组件</p>
        {/* 使用接收的值 */}
        <p>子组件6传递给我的值是:{this.context.grandNum}</p>
      </div>
    )
  }
}

class Parent extends Component {
  render() {
    return(
      <div>
        <h3>我是父组件</h3>
        <Child></Child>
      </div>
    )
  }
}

export default class Compo6 extends Component {
  // 声明要传递的数据类型
  static childContextTypes = {
    grandNum: PropTypes.number
  }

  // 保存要传递的数据到上下文中
  getChildContext() {
    return({
      grandNum: 666
    })
  }

  render() {
    return(
      <div>
        <h1>我是子组件6</h1>
        <Parent></Parent>
      </div>
    )
  }
}