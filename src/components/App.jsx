import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
          <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
