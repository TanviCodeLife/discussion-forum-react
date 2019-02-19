import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: false});
  }


  render(){
    let currentlyVisibleContent = null;
    if (!this.state.formVisibleOnPage) {
      currentlyVisibleContent = <Redirect to='/' />
    } else {
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation} handleFormSubmission={this.handleFormSubmission}/>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleContent}
      </React.Fragment>
    );
  }
}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
