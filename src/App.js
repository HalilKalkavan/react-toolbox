import React from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import ApprovalCard from './Components/ApprovalCard';
import FirstClassComponent from './Components/FirstClassComponent';
// import SeasonDisplay from './Components/SeasonDisplay';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296',
      },
    });

    console.log(this);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
          guesswhtIam="Im the propsobject"
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
// testing github new pass
export default App;
