import React, { Component } from 'react';
import { getArtists } from "../../api";
import SearchInput from './SearchInput';
import ArtistsList  from './ArtistsList';
import Loading  from './Loading';
import LoadMore  from './LoadMore';
import NoResults  from './NoResults';

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

  loading(){
    let response = null;
    if (this.state.fetching) {
      response = (<Loading />);
    }
    return response;
  }

  loadMore(total, artistsSize){
    let loadMore=null;
    if (artistsSize === 0) {
      loadMore=(<NoResults fetching={this.state.fetching}/>);
    }
    else
      if (total > artistsSize) {
        loadMore=(<div className="loadMoreLayout">
                    <LoadMore
                      fetching={this.state.fetching}
                      handleLoadMoreChange={this.handleLoadMoreChange}
                      searchText={this.state.searchText}
                    />
                  </div>);
      }
    return loadMore;
  }

  render() {
    const { searchText, artists, total, fetching } = this.state;
    return (
      <div>
        <SearchInput
          searchText={searchText}
          onChange={this.handleSearchTextChange}
        />

        {this.loading()}

        <ArtistsList
          artists={artists}
          artistTotal={this.state.total}
          selectedArtists={this.props.selectedArtists}
          onSelectArtist={this.props.onSelectArtist}
        />
        {this.loadMore(total, artists.length)}
      </div>

    );
  }
}

export default ArtistsPanel;
