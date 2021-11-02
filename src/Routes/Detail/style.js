import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 40px;
`;
export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const Cover = styled.div`
  width: 600px;
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
`;

export const Data = styled.div`
  width: 70%;
  padding-left: 50px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const SubTitle = styled.h3`
  margin: 12px 0px;
`;

export const ItemContainer = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

export const Item = styled.div``;

export const Divider = styled.div`
  margin: 0 10px;
`;

export const Overview = styled.p`
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
`;

export const Imdb = styled.span`
  margin: 0px 8px;
`;

export const ComponyLogoImg = styled.img`
  background-color: rgb(145, 145, 147);
  border-radius: 3px;
  width: 5%;
  padding: 2px;

  margin-left: 3px;
`;
export const VideoContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

export const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 12px;
`;

export const TableContainer = styled.div`
  overflow-x: scroll;
  height: 240px;
  display: flex;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SeasonContainer = styled.div`
  text-align: center;
`;

export const SeasonImg = styled.img`
  width: 130px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  height: 180px;
`;
