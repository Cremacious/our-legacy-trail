import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(0, 100%, 96.86274509803921%);
  background-color: #706f6f59;
`;

export const ActivityButton = styled.button.attrs({
  className: 'btn btn-primary',
})``;

export const ActivityRow = styled.div.attrs({
  className: 'row',
})``;

export const ActivityCol = styled.div.attrs({
  className: 'col',
})``;
