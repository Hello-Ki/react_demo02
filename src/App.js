import { Component } from "react";
// import Compo1 from "./components/Compo1";
// import Compo2 from "./components/Compo2";
// import Compo3 from "./components/Compo3";
// import Compo4 from "./components/Compo4";
// import Compo5 from "./components/Compo5";
// import Compo6 from "./components/Compo6";

import "./App.css"
import BaseRouter from "./router";

export default class App extends Component {
  render() {
    return (
      // <div>
      //   {/* <p>App 组件</p>
      //   <Compo1></Compo1>
      //   <Compo2></Compo2>
      //   <Compo3></Compo3>
      //   <Compo4></Compo4>
      //   <Compo5></Compo5>
      //   <Compo6></Compo6> */}
      // </div>
    <BaseRouter />
    )
  }
}