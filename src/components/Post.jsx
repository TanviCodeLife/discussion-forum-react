
import React from 'react';
import PropTypes from 'prop-types';

function Post(props){

  return (
    <div>
      <img src={props.image}/>
      <h3>{props.title}</h3>
      <p>{props.category}</p>
      <p>{props.message}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Post;
