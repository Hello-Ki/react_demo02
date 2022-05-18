// BrowserRouter 是一个路由组件(自带history模式), HashRouter 是hash模式
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// 路由懒加载
// const Home = () => {
//   import("../views/Home")
// }
// const About = () => {
//   import("../views/About")
// }

// import App from "../App"
import Home from "../views/Home"
import About from "../views/About"

const BaseRouter = () => {
  return (
    <Router>
      <Routes>
        {/* 以组件的方式配置路由 */}
        <Route path="/*" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default BaseRouter
