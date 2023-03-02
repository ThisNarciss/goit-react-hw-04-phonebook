import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(225, 233, 15);
  background: linear-gradient(
    0deg,
    rgba(225, 233, 15, 1) 6%,
    rgba(51, 45, 253, 1) 100%
  );
  display: flex;
`;
export const ChildrenBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 350px;
`;

export const Notification = styled.p`
  padding: 20px 40px;
  font: 20px;
  border-radius: 5px;
  border: 1px solid red;
  color: red;
`;
