import React from 'react';
import PropTypes from 'prop-types'; 
// ./ means same directory
//component is function that returns html.
//컴포넌트는 대문자로 시작한다.
//JSX is html + js.
//So <App /> is component
//propType 관련 문서 
//https://doc.ebichu.cc/react/docs/typechecking-with-proptypes.html

//react의 모든 element는 다르게 보일 필요가있다.
//따라서 key라는 prop을 각자다르게 설정해주어야한다.


/*
function App() { //function component
  return (
    <div className="App">
    </div>
  );
}
*/

// declare AppComponent is React Component
class App extends React.Component{  //class component
  constructor(props){ //render 이전에 호출된다.
    super(props);

  }

  state = { //state is object. state is needed for dynamic data.
    count: 0
  }
  add = () => {
     //SetState를 사용하면 React는 render함수 재호출을 통해 새로운 state로 refresh를 진행한다. state 오브젝트 prop에 직접 접근하면 refresh가 되지않아 의미가 없다. render 호출해도 반영이 안됨
     this.setState(current => ( {count: current.count + 1}));
   };
  minus = () => {
     this.setState(current => ( {count: current.count - 1}));
     // this.setState({count: this.state.count - 1}) 
     //위처럼 해도되지만 react가 똑똑하게도 첫번째 인자에 state를 넣어준다
   };
  //React는 class component의 Render method를 자동으로 랜더링
  render(){
    return  (
      <div>
      <h1>I am class {this.state.count} </h1>
      <button onClick={this.add}>Add</button> 
      <button onClick={this.minus}>Minus</button>
      </div>
    )
    //() following function is needed for immediate call.
  }

  //this is following redner func when udpate(setState ~ ) is emerged.
  componentDidUpdate(){
    
  }
  //mounting은 컴포너틑의 born을 의미한다 즉 시작될때 실행됨
  //unmounting은 컴포너틑의 kill을 의미한다 즉 페이지가 넘어갈때 실행
  //this is following render at first time. 
  componentDidMount(){
    
  }
  componentWillUnmount(){
    
  }
}


export default App;

//arg => ( arg * 2 ) === function(arg){ return arg*2; } 