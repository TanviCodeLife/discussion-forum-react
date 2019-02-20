import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Post(props){
  console.log(props);
  function handleNewLike(){
    props.onLikedPost(props.id);
  }
  function handleNewDislike(){
    props.onDislikedPost(props.id);
  }

  function displayTimeOpen(timeOpen) {
    return timeOpen.from(new Moment(), true);
  }

  return (
    <div>
      <img src={props.image}/>
      <h3>{props.title}</h3>
      <p>{props.category}</p>
      <p>{props.message}</p>
      <p>Added {displayTimeOpen(props.timeOpen)} ago</p>
      <p>{props.likes}</p>
      <button onClick={handleNewLike}>Like</button>
      <p>{props.dislikes}</p>
      <button onClick={handleNewDislike}>Hate</button>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onLikedPost: PropTypes.func,
  onDislikedPost: PropTypes.func,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default Post;
