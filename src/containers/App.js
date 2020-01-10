import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import {profiles} from '../profiles';


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
        <h1> PROFILE HUNT </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList profiles={filteredProfiles}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
