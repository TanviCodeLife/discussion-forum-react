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
    this.handleIncrementLikes = this.handleIncrementLikes.bind(this);
    this.handleIncrementDislikes = this.handleIncrementDislikes.bind(this);
    this.handleSortPostList = this.handleSortPostList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  handleIncrementLikes(postId){
    var updatedMasterPostList = this.state.masterPostList.slice();
    for(let i = 0; i < updatedMasterPostList.length; i++){
      if(postId === updatedMasterPostList[i].id){
        updatedMasterPostList[i].likes += 1;
      }
    }
    this.setState({masterPostList: updatedMasterPostList});
  }

  handleIncrementDislikes(postId){
    var updatedMasterPostList = this.state.masterPostList.slice();
    for(let i = 0; i < updatedMasterPostList.length; i++){
      if(postId === updatedMasterPostList[i].id){
        updatedMasterPostList[i].dislikes += 1;
      }
    }
    this.setState({masterPostList: updatedMasterPostList});
  }

  handleSortPostList(){
    var sortedPostList = this.state.masterPostList.slice();
    sortedPostList.sort(function (a, b) {
        return a.likes - b.likes;
      });
    this.setState({masterPostList: sortedPostList});
    }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} onLikedPost={this.handleIncrementLikes} onDislikedPost={this.handleIncrementDislikes}
          onSortPostList={this.handleSortPostList}/>} />
          <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
