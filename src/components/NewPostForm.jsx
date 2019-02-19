import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function NewPostForm (props) {
  let _title = null;
  let _message = null;
  let _category = null;
  let _image = null;

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, message: _message.value, category: _category.value, image: _image.value, likes: 0, dislikes: 0, id: v4()});
    _title = '';
    _message = '';
    _category = '';
    _image = '';
    props.handleFormSubmission();
    console.log(props);
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref= {(input) => {_title = input;}} />
        <textarea
          id='message'
          placeholder='Message'
          ref= {(textarea) => {_message = textarea;}}/>
          <input
            type='text'
            id='category'
            placeholder='Category'
            ref= {(input) => {_category = input;}} />
          <input
            type='text'
            id='image'
            placeholder='Image URL'
            ref= {(input) => {_image = input;}} />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  handleFormSubmission: PropTypes.func
};

export default NewPostForm;
