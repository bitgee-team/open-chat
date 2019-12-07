import React, { Component } from 'react';
import './style.css';

class SearchInput extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <div className="SearchInput">
        <input type="text" placeholder={placeholder} />
      </div>
    )
  }
}

export default SearchInput;
