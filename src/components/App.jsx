import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({
      imageName,
    });
    console.log(imageName);
  };

  render() {
    return (
      <>
        <p>Image Gallery</p>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
