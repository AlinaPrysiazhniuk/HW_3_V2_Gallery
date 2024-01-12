import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      return alert('Enter data for search');
    }

    this.props.onSubmit(this.state.imageName); //пропс onSubmit, що передається в app
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              //class="input"
              type="text"
              name="imageName"
              value={this.state.imageName}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleNameChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
