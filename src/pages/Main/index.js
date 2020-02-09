import React, {Component} from 'react';
import { FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import PreviewMovie from '../../components/PreviewMovie';

import { Container, SubmitButton, Form, Content } from './style';

export default class Main extends Component{
  state ={
    search: '',
    list_movies: '',
  };

  async componentDidMount(){
    const response = await api.get('/list_movies.json');

    this.setState({list_movies: response.data.data.movies});

  }


  handleInputChange = e =>{
    this.setState({ serach: e.target.value });
  }

  handleSubmit = async e =>{
    e.preventDefault();

    const response = await api.get(``);

  }

  render() {
    const { serach } = this.state;

    return (
      <Container>
        <Sidebar />
          <Content>
            <Form onSubmit={this.handleSubmit}>
              <input
              type="text"
              placeholder="Search Movies"
              value={serach}
              onChange={this.handleInputChange}
              />
              <SubmitButton>
                <FaPlus color="#FFF" size={14} />
              </SubmitButton>
            </Form>

            <PreviewMovie />
          </ Content>
      </Container>
    );
  }
};
