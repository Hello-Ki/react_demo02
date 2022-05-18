import { Component } from "react";
import Compo1 from "./components/Compo1";
import Compo2 from "./components/Compo2";
import Compo3 from "./components/Compo3";

export default class App extends Component {
  render() {
    return (
      <div>
        <p>App 组件</p>
        <Compo1></Compo1>
        <Compo2></Compo2>
        <Compo3></Compo3>
      </div>
    )
  }
}