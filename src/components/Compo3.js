import { Component } from "react";

export default class Compo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [5, 4, 3, 2, 1],
    };
  };

  render() {
    return(
      <div>
        <h1>我是子组件3</h1>
        <button onClick={this.addNum.bind(this)}>点击增加一项</button>
        <ul>
          {this.state.nums.map((item, index) => {
            return(
              <li key={item}>{item}-{index}</li>
            );
          })}
        </ul>
      </div>
    );
  };
  addNum() {
    let arr = JSON.parse(JSON.stringify(this.state.nums));
    arr.splice(2, 0, -1);
    this.setState({
      nums: arr,
    });
  };
}