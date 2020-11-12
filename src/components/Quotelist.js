import React from 'react'
import Quotecard from './Quotecard';
import axios from 'axios';

export default class Quotelist extends React.Component {
  state = {
    quotes: [],
  }

  
  getQuotes = () => (
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => this.setState({quotes: response.data}))
  )


  componentDidMount() {
    this.getQuotes()
  }

  render() {
    return (
      <div>
        <form>
        <input type="submit" placeholder="New Character" value="Click Me!"></input>
        </form>
        {this.state.quotes.map(quote => <Quotecard {...quote}/>)}
      </div>
      
    )
  }
}