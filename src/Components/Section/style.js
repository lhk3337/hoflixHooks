import styled from "styled-components";
export const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  :not(:first-child) {
    margin-top: 25px;
  }
`;
export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
export const Grid = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 25px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 1px;
`;
