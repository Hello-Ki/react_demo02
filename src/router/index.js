// BrowserRouter 是一个路由组件(自带history模式), HashRouter 是hash模式
import {  BrowserRouter, Route, Switch} from 'react-router-dom';

// 路由懒加载
// const Home = () => {
//   import("../views/Home")
// }
// const About = () => {
//   import("../views/About")
// }

import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
// import User from "../views/User"

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* 以组件的方式配置路由 */}
        <Route path="/" component={() => {
          return(
            <App num={20}>
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                {/* 定义动态路由 */}
                {/* <Route exact path="/about/:id" component={About}></Route> */}
              </Switch>
            </App>
          )
        }}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default BaseRouter;
