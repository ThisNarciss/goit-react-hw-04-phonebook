import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const FormInput = styled(Field)`
  padding: 5px 15px;

  border: none;
  border-radius: 5px;
`;

export const ButtonAdd = styled.button`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #2248c3;
  color: #ffffff;
  transition: background-color 250ms linear;
  :hover,
  :focus {
    background-color: green;
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 10px;
  color: red;
`;
