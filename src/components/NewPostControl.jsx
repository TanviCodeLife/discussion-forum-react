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
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleFormSubmission(){
    this.setState({formVisibleOnPage: false});
  }


  renderRedirect(){
    if (!this.state.formVisibleOnPage) {
      return <Redirect to='/' />
    }
  }

  render(){
    let currentlyVisibleContent = null;
    if (!this.state.formVisibleOnPage) {
      {this.renderRedirect()}
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
