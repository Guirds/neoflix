import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Form = styled.form`
  margin: 30px;
  display: flex;
  flex-direction: row;
  height: 50px;

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #e64021;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Movies = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
