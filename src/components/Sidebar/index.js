import React, { Component } from 'react';

import { Container, List, Title } from './style';

export default class Sidebar extends Component {
  state ={
    genres: [
      'Comedy', 'Sci-fi', 'Horror', 'Romance',
      'Action', 'Thriller', 'Drama', 'Mystery',
      'Crime', 'Animation', 'Adventure', 'Fantasy',
      'Comedy-romance', 'Action-comedy', 'SuperHero'
    ]
  };

  render() {
    return (
      <>
        <Container>
          <Title><a href="/">NeoFlix</a></Title>
          <ul>
            {this.state.genres.map(genre => (<a href="/"  key={genre}><List>{genre}</List></a>))}
          </ul>
        </Container>
      </>
    );
  };
};
