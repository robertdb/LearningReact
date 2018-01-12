import React, { Component } from 'react';
import SearchButton  from './SearchButton';


class SearchInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: this.props.searchText
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.setState({ searchText: ev.target.value });
  }
  handleSubmit(ev){
    ev.preventDefault();
    this.props.onChange(this.state.searchText);
  }
  render() {
    const text = this.state.searchText;
    return (

      <form onSubmit={this.handleSubmit} className="searchForm">
      <input
          type="text"
          autoFocus
          className="searchInput"
          value={text}
          onChange={this.handleInputChange}
        />
        <SearchButton type="submit" className="searchButtonLayout" />
      </form>
    );
  }
}

export default SearchInput;
