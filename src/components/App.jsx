import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=34983998-155dfb76bac09cdf48f99cd2f&q=yellow+flowers&image_type=photo'
    )
      .then(res => res.json())
      .then(console.log);
  }

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
