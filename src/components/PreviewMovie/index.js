import React from 'react';
import {FaStar} from 'react-icons/fa'
import { Container } from './style';

export default function PreviewMovie({title, rating, runtime, img}) {
  return (
    <Container>
      <h4>{title}</h4>
      <span>Rating: {rating} <FaStar color="#e64021" /></span>
      <small>Runtime: {runtime}m</small>
      <img src={img} alt={title}/>
    </Container>
  );
}
