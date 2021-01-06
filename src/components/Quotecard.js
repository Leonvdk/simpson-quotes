import React, { Component } from 'react';
import './Quotecard.css';

export default class Quotecard extends Component {
  render() {
    return (
      <div className="product-card">
        {/* <i>{this.props.characterDirection}</i> */}
        <h2>{this.props.character}</h2>
        <img src = {this.props.image} alt = {this.props.title} />
        <p>{this.props.quote}</p>
      </div>
    )
  }
}
