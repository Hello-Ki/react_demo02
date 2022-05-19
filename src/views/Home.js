import { Component } from "react";

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home组件</h1>
        <button onClick={this.changeRouter.bind(this)}>跳转到About</button>
        <button onClick={this.goBack.bind(this)}>返回上一页</button>
      </div>
    )
  };

  goBack() {
    this.props.history.goBack();
  }
  changeRouter() {
    // 动态路由显式传参
    // this.props.history.push("/about/123");
    // 隐式传参
    this.props.history.push({
      pathname: "/about",
      state: {
        id: 123,
      }
    })
  };
}