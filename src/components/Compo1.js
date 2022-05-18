import React, { Component } from "react";

export default class Compo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initVal: "请输入用户名",
    };
  };
  render() {
    return(
      // 注意JSX的书写格式
      <div>
        {/* React DOM */}
        {React.createElement("h1", null, "我是子组件1")}
        {/* HTML DOM */}
        <label htmlFor="name">
          用户名:
          <input style={{width: 150+"px"}} type="text" id="name"/>
        </label>
        {/* 双向数据绑定 */}
        <input type="text" value={this.state.initVal} onChange={this.handleChange.bind(this)} />
        <p>{this.state.initVal}</p>
      </div>
    )
  };
  handleChange(e) {
    this.setState({
      initVal: e.target.value,
    })
  }
}