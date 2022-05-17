import React, { Component } from "react";

export default class Compo1 extends Component {
  render() {
    return(
      // 注意JSX的书写格式
      <div>
        {/* React DOM */}
        {React.createElement("div", null, "子组件1")}
        {/* HTML DOM */}
        <label htmlFor="name">
          用户名:
          <input style={{width: 150+"px"}} type="text" id="name" />
        </label>
      </div>
    )
  }
}