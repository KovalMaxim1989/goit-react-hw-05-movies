import styled from 'styled-components';

export const List = styled.ul`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  border-bottom: 1px solid black;
`;
export const ActorItem = styled.li`
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 2px 2px 6px 2px rgba(254, 60, 1, 0.9);
    transform: scale(1.05);
  }
`;
