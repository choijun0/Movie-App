import React from 'react';
import {HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"

function App(){
  //url의 작동방식은 해당키워드가 존재한다면 path가 참으로 인식한다.
  //exact prop을 통해 해결가능
  return <HashRouter>
  <Navigation />
  <Route path="/" exact={true} component={Home} />
  <Route path="/about" component={About} />
  <Route path="/movie/:id" component={Detail} />
  </HashRouter>
}

export default App;