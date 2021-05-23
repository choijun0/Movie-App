import React from "react";

//class component에 props가 프로퍼티로 주어진다.
class Detail extends React.Component{
   render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
  componentDidMount() {
    console.log(this); //can check out props property in detail component
    const {location, history} = this.props;
    //no click event 
    if(location.state == undefined){
      history.push('/');
    }
  }
}
export default Detail;