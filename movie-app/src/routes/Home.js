import React from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios';
import Movie from '../components/Movies';
import "../Home.css";
// ../은 해당 파일의 상단경로를 의미한다.

class Home extends React.Component{
  state = {
    isLoading : true,
    movie : []
    //setState를 통해 prop을 추가할 수있지만 처음에 여기쓰고 시작하는 것도 나쁘지않다. setStae({book = true}) 라고 쓰면 book prop이 동적으로 추가됨.
  }
  render(){
    const {isLoading, movies} = this.state;
    //밑의 코딩이 HTML처럼 보여도 JSX이다 그래서 class라고 쓰면 js 의class 와 html class를 react가 혼동함으로 className이라고 작성해야한다. ex) for -> htmlFor
    return <section className="container">
    {isLoading ? <div className="loader">
    <span className="loader_text">Loading...</span>
    </div> : <div className="movies">
     {movies.map(movie => {
      //key is not a prop
      return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>})}
    </div>}
    </section>
  }

  //함수앞 async 키워드는 기다려햐하는 함수가 있다는 것을 JS에 알리는 것이고 await키워드로 그함수를 특정한다.
  //위내용을 하는 이유는 axios.get 함수는 시간이 조금 걸리기 때문이다.
  getMovies = async () => { const {data : {data : {movies}}} = await axios.get(' https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
  this.setState({movies, isLoading : false}); // = {movies : movies} 앞은 state 뒤는 {data : {data : {movies}}} 에서나온것
  }
  //{data : {data : {movies}}} = data.data.movies

  componentDidMount(){
    this.getMovies();
  }
}
export default Home;