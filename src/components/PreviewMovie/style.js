import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  background: #414141;
  border-radius: 5px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4{
    text-align: center;
    margin-top: 10px;
    color: #e64021;
  }

  span{

    svg{
      margin-right: 3px;
    }
  }

  small,span{
    margin-bottom: 5px;
    color: #fff;
    font-size: 12px;
  }

  img{
    border-radius: 5px;
  }

  img,h4{
    width: 100%;
  }
`;
