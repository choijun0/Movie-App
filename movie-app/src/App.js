import React from 'react';
import PropTypes from 'prop-types'; 

class App extends React.Component{
  state = {
    isLoading : true,
    movie : []
    //setState를 통해 prop을 추가할 수있지만 처음에 여기쓰고 시작하는 것도 나쁘지않다. setStae({book = true}) 라고 쓰면 book prop이 동적으로 추가됨.
  }
  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false})}
    , 6000); //6second

  }
}
export default App;