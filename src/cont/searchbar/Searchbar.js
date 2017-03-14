import React, { Component } from 'react';
import './Searchbar.css';

const suggArr = ['Angela Merkel','Donald Trump','Vladimir Putin','bla bla bla']
class Searchbar extends Component {
  render() {
    const suggestions = suggArr.map( sugg => (
            <li>{sugg}</li>
        ))
    return (
        <div>
            <input className="Searchbar" type="text"/>
            <ul className="SuggestionList">
                {suggestions}
            </ul>
        </div>
    );
  }
}

export default Searchbar;
