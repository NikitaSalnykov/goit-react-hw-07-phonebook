import styled from 'styled-components';

export const DivContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
    @media screen and (min-width: 1200px) {
    width: 1200px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 16px;
    padding-bottom: 32px;
  }
`;
