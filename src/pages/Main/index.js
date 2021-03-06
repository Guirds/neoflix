import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import PreviewMovie from '../../components/PreviewMovie';

import { Container, SubmitButton, Form, Content, Movies } from './style';

export default class Main extends Component{
  state ={
    search: '',
    list_movies: [],
  };

  async componentDidMount(){
    const list_movies = localStorage.getItem('movies');

    if(list_movies) {
      this.setState({ list_movies: JSON.parse(list_movies) });
    } else{
      const response = await api.get('/list_movies.jsonp');
      this.setState({list_movies: response.data.data.movies});
    }
  };

  componentDidUpdate(_, prevState){
    const {list_movies} = this.state;

    if(prevState.list_movies !== list_movies){
      localStorage.setItem('movies', JSON.stringify(list_movies));
    }
  }

  handleInputChange = e =>{
    this.setState({ search: e.target.value  });
  };

  handleSubmit = movie =>{
    movie.preventDefault();

    const {search} = this.state;
    const movies = this.state.list_movies.title;

    if(search === movies){
      this.setState({
        list_movies: this.state.list_movies.filter(search => search !== movie)
      })
    }
  };

  render() {
    const { search } = this.state;

    return (
      <Container>
        <Sidebar />
          <Content>
            <Form onSubmit={() => this.handleSubmit()}>
              <input
              type="text"
              placeholder="Search Movies"
              value={search}
              onChange={this.handleInputChange}
              />
              <SubmitButton>
                <FaPlus color="#FFF" size={14} />
              </SubmitButton>
            </Form>

            <Movies>
              {this.state.list_movies.map(movie =>(
                <PreviewMovie
                key={movie.id}
                title={movie.title_long}
                genres={movie.genres}
                rating={movie.rating}
                runtime={movie.runtime}
                desc={movie.description_full}
                img={movie.medium_cover_image}
                onClick={this.handleClick}
                />
              ))}
            </Movies>
          </ Content>
      </Container>
    );
  }
};
