import styled from "styled-components";

export const Container = styled.div`
  font-size: 18px;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 210px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  margin-bottom: 8px;
  transition: opacity 0.1s linear;
`;
export const Rating = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;
export const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

export const Title = styled.span`
  display: block;
  margin: 10px 7px 30px;
  font-size: 18px;
`;

export const Year = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Div = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;
