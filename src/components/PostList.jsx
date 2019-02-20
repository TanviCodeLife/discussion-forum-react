import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import Moment from 'moment';

function PostList(props){
  function sortByLikes(){
    props.onSortPostList();
  }

  return (
    <div>
      <button onClick={sortByLikes}>Sort</button>
      <hr/>
      {props.postList.map((post) =>
        <Post title={post.title}
          category={post.category}
          message={post.message}
          image={post.image}
          likes={post.likes}
          dislikes={post.dislikes}
          timeOpen={post.timeOpen}
          key={post.id}
          id={post.id}
          onLikedPost={props.onLikedPost}
          onDislikedPost={props.onDislikedPost}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onLikedPost: PropTypes.func,
  onDislikedPost: PropTypes.func,
  onSortPostList: PropTypes.func
};

export default PostList;
