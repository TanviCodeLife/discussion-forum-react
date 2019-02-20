import React from 'react';
import Header from './Header';
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

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
    this.handleIncrementDislikes.bind(this);
    this.updateTicketElapsedWaitTime = this.updateTicketElapsedWaitTime.bind(this);
  }


  componentDidMount() {
  this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTicketElapsedWaitTime(),
    60000
  );
}

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }


  updateTicketElapsedWaitTime() {
      console.log("check");
      let newMasterPostList = this.state.masterPostList.slice();
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true);
      newMasterTicketList.push(newTicket);
      this.setState({masterPostList: newMasterPostList})
    }


  handleSortPostList(){
    var sortedPostList = this.state.masterPostList.slice();
    sortedPostList.sort(function (a, b) {
      return a.likes - b.likes;
    });
    this.setState({masterPostList: sortedPostList});
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
