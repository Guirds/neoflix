import styled from 'styled-components';

export const Container = styled.aside`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  background: linear-gradient(to bottom, #414141 0%, #181818 125%), transparent;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;

  a{
    text-decoration: none;
    color: #fff;
  }
`;

export const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 15px 20px;
  font-size: 30px;

  a{
    color: #e64021;
  }
`;

export const List = styled.li`
  list-style: none;
  padding: 10px 20px;
  height: 100%;

  &:hover{
    background: linear-gradient(to bottom, #414141 0%, #181818 125%), transparent;
  }

`;
