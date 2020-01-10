import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {profiles} from './profiles';


class App extends Component {

  constructor(){
    super()
    this.state = {
      profiles:profiles,
      searchfield:''
    }
  }

  onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
    
  }

  render(){
    const filteredProfiles = this.state.profiles.filter(profiles =>{
      return profiles.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    
    return (
      <div className='tc'>
        <h1> Profile Hunt </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList profiles={filteredProfiles}/>
      </div>
    )
  }
}

export default App;
