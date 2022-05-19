import { Component } from "react";

export default class About extends Component {
  render() {
    return(
      <div>
        <h1>About组件</h1>
        <button onClick={this.changeRouter.bind(this)}>跳转到Home</button>
      </div>
    )
  };

  // 在生命周期函数中, 获取路由中传递的参数
  UNSAFE_componentWillMount() {
    // 方法一: 动态路由显式传参
    // console.log(this.props.match.params.id);
    // 方法二: 隐式传参
    console.log(this.props.location.state.id);
  }

  changeRouter() {
    this.props.history.push("/home");
  };
}