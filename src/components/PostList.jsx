import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  return (
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post title={post.title}
          category={post.category}
          message={post.message}
          image={post.image}
          key={post.id}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
