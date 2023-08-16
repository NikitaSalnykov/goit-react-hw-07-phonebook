import styled from 'styled-components';

export const List = styled.ul`
max-width: 500px;
padding: 0;

& li {
  position: relative;
  display:flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  background-color: #dadbe3;
  padding: 15px;
  padding-right: 24px;
      overflow: hidden;
  &:nth-child(even) {
  background-color: transparent;
}
  & div {
  display:flex;
  flex-wrap: wrap;
  & p {
    margin-left: 10px;
  }
  & p+p {
  margin-left: 5px;
  }
}
  & button {
    top: 0;
    right: 0;
    position: absolute;
    border: none;
    background: transparent;
    padding: 3px;
    cursor: pointer;
  }
}
`