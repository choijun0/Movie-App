import React from 'react';
import PropTypes from 'prop-types'; 
// ./ means same directory
//component is function that returns html.
//컴포넌트는 대문자로 시작한다.
//JSX is html + js.
//So <App /> is component

const foodILike = [
  {
    id: 1,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 5.0
  },
  {
    id: 2,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.5
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.7
  }
];

//img tag need alt prop for blinder.
function Food({ name , picture, rating }
){
  return (
    <div>
      <h1>I love {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name}/> 
    </div>
  );
}

//Check prop
//propTypes로 이름을 지어야 react가 인지하고 체크한다.
Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
//propType 관련 문서 
//https://doc.ebichu.cc/react/docs/typechecking-with-proptypes.html

//react의 모든 element는 다르게 보일 필요가있다.
//따라서 key라는 prop을 각자다르게 설정해주어야한다.
function App() {
  return (
    <div className="App">
    {foodILike.map(dish => ( <Food key={dish.id} name={dish.name} picture={dish.image} rating = {dish.rating} /> ))}
    </div>
  );
}
//map 함수는 배열의 각인자에 대해 특정 함수를 실행시키고 return 값들로 이루어진 배열을 반환한다.
//반환된 component배열은 html에 순서대로 기입된다.


export default App;

//arg => ( arg * 2 ) === function(arg){ return arg*2; } 
//react magic App컴포넌트에서 추가한 프로퍼티들은 Food컴포넌트의 인자로 전달이된다.
//{ name } 전달된 인자중 favorite키 value만을 빼내는 방법이다. 