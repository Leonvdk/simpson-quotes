import React from 'react'
import Quotecard from './Quotecard';
import axios from 'axios';

export default class Quotelist extends React.Component {
  state = {
    characters: [],
  }
  
  componentDidMount() {
    this.getCharacters()
  }
  
  getCharacters = () => (
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=9')
    .then(response => this.setState({characters: response.data}))
  )
  
  handleCharactersOrient = (event) => (
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=9')
   .then(response => this.setState({characters: response.data.filter(character => character.characterDirection == event.target.name)})) 
  )


  render() {
    return (
      <div>
        <input name="Right" type="submit" placeholder="Looking Left" value="Looking Left" onClick={this.handleCharactersOrient}></input>
        <input type="submit" placeholder="Mix!" value="Mix!" onClick={this.getCharacters}></input>
        <input name="Left" type="submit" placeholder="Looking right" value="Looking right" onClick={this.handleCharactersOrient}></input>
        <div className='product-list'>
          {this.state.characters.map(character => <Quotecard {...character}/>)}
        </div>
      </div>
      
    )
  }
}
