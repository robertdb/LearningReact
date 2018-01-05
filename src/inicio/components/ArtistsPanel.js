import React, { Component } from 'react';
import { getArtists } from "../../api";
import SearchInput from './SearchInput';
import ArtistsList  from './ArtistsList';
import Loading  from './Loading';
import LoadMore  from './LoadMore';

class ArtistsPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      total: 0,
      fetching: false,
      searchText: ""
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);

    this.handleLoadMoreChange = this.handleSearchTextChange.bind(this);
  }

  handleFetch(searchText,newSearch){
    if (searchText.length === 0) return;

    if (newSearch) {
      this.setState({
        fetching: false,
        artists: [],
        total:0
      });
    }

    this.setState({ fetching: true });

    getArtists(searchText, this.state.artists.length).then(data => {
      this.setState({
        fetching: false,
        artists: newSearch ? data.items :this.state.artists.concat(data.items),
        total: data.total
      })
    });
  }

  handleLoadMoreChange(){
    this.handleFetch(this.state.searchText,true);
  }
  handleSearchTextChange(searchText) {
    let newSearch = (searchText !== this.state.searchText);
    this.setState({ searchText: searchText});
    this.handleFetch(searchText,newSearch);
  }

  render() {
    const { searchText, artists, total, fetching } = this.state;

    let response;
    if (this.state.fetching) {
      response = (<Loading />);
    }
    else {
      response = <ArtistsList
        artists={artists}
        artistTotal={total}
        selectedArtists={this.props.selectedArtists}
        onSelectArtist={this.props.onSelectArtist}
      />;

    }
    let loadMore;
    if (total > artists.length) {
      loadMore = (this.state.fetching)? null:(
        <div className="loadMoreLayout">
          <LoadMore
            handleLoadMoreChange={this.handleLoadMoreChange}
            searchText={searchText}
          />
        </div>);
    }
    return (
      <div>
        <SearchInput
          searchText={searchText}
          onChange={this.handleSearchTextChange}
        />
        {response}
        {loadMore}
      </div>

    );
  }
}

export default ArtistsPanel;
