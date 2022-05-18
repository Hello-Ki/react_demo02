import { Component } from "react";

export default class Compo5 extends Component {
  state = {
    arr: ["按钮1", "按钮2", "按钮3"],
    flag: 0,
  };

  render() {
    return(
      <div>
        <h1>我是子组件5</h1>
        <div className="tabBar">
          {
            this.state.arr.map((item, index) => {
              return(
                <input type="button" className={this.state.flag === index ? "active" : ""} value={item} key={item} onClick={this.changeTab.bind(this, index)}/>
              )
            })
          }
        </div>
        <div className="content">
          {
            this.state.arr.map((item, index) => {
              return(
                <div className={this.state.flag === index ? "current" : "notCurrent"} key={item}>{item}</div>
              )
            })
          }
        </div>
      </div>
    )
  };

  changeTab(i) {
    this.setState({
      flag: i
    })
  };
}