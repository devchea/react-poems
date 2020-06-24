import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }
  
  updatePoems = (poem) => {
    let start = poem.index
    this.state.poems.splice(start, 1, poem)
    this.setState({
      poems: this.state.poems
    })
  }

  deletePoem = (name) => {
    this.setState({
      poems: this.state.poems.filter(poem => poem.name !== name)
    })
  }

  render(){
    // console.log(poems)
    return (
      <div className="ui container">
        <PoemForm poems={this.state.poems} updatePoems={this.updatePoems} />
        <PoemList poems={this.state.poems} updatePoems={this.updatePoems} deletePoem={this.deletePoem} />
      </div>
    );
  }

}

export default App;
