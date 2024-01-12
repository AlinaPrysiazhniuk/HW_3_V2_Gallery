import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {
    fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo')
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
