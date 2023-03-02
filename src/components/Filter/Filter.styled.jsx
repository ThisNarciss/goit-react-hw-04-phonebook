import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const FilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const IconSearch = styled(BiSearchAlt)`
  position: absolute;
  top: 20px;
  left: 5px;
  color: grey;
`;

export const FilterLabel = styled.label``;

export const FilterInput = styled.input`
  padding: 5px 25px;
  outline: none;
  border: 2px solid grey;
  border-radius: 20px;
  transition: border 250ms linear;
  :hover,
  :focus {
    border: 2px solid green;
  }
`;
