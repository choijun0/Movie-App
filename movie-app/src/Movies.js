import React from 'react';
import PropTypes from 'prop-types'; 

function Movie({key, id, year, title, summary, poster}){
  return <h4>{title}</h4>
}

Movie.protoTypes = { 
  key : PropTypes.number.isRequired,
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired
}

export default Movie;