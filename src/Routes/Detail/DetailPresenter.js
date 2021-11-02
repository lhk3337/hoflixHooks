import React from "react";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import Loader from "Components/Loader/Loader";
import Message from "Components/Message/Message";
import IMDB from "assets/imdb.png";
import Youtube from "react-youtube";
import {
  Container,
  Backdrop,
  Content,
  Cover,
  Data,
  Title,
  ItemContainer,
  Item,
  Divider,
  Imdb,
  ComponyLogoImg,
  SubTitle,
  Overview,
  VideoContainer,
  VideoContent,
  TableContainer,
  SeasonContainer,
  SeasonImg,
} from "./style";

const opts = {
  height: "400px",
  width: "700px",
};
const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <>
      <Helmet>
        <title>읽는 중 | hoflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message text={error} />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | hoflix</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date === undefined || result.release_date === null
                  ? "Not Found Year"
                  : `${result.release_date.substring(0, 4)}년`
                : result.first_air_date === null || result.first_air_date === undefined
                ? "Not Found Year"
                : `${result.first_air_date.substring(0, 4)}년`}
            </Item>

            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? result.runtime === undefined || result.runtime === null || result.runtime === 0
                  ? "Not Found Time"
                  : `${result.runtime}분`
                : (result.episode_run_time && result.episode_run_time[0] === undefined) ||
                  (result.episode_run_time && result.episode_run_time[0] === null)
                ? "Not Found Time"
                : `${result.episode_run_time && result.episode_run_time[0]}분`}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1 ? genre.name : `${genre.name} / `
                )}
            </Item>
            <Imdb>
              {result.imdb_id ? (
                <a href={`http://imdb.com/title/${result.imdb_id}`}>
                  <img src={IMDB} />
                </a>
              ) : (
                ""
              )}
            </Imdb>
            {result.production_companies &&
              result.production_companies.map((logo) =>
                logo.logo_path !== null ? (
                  <ComponyLogoImg key={logo.id} src={`https://image.tmdb.org/t/p/original${logo.logo_path}`} />
                ) : (
                  ""
                )
              )}
            <Divider></Divider>
            <Item>
              {result.production_countries &&
                result.production_countries.map((country, index) =>
                  index === result.production_countries.length - 1 ? country.name : `${country.name} / `
                )}
            </Item>
          </ItemContainer>
          <SubTitle>줄거리</SubTitle>
          <Overview>{result.overview}</Overview>
          <VideoContainer>
            <hr />
            <VideoContent>
              {result.videos.results && result.videos.results.length > 0 && (
                <Youtube videoId={result.videos.results[0].key} opts={opts} />
              )}
            </VideoContent>
          </VideoContainer>

          <TableContainer>
            {result.seasons &&
              result.seasons.map((season) =>
                season.poster_path !== null ? (
                  <SeasonContainer>
                    <SeasonImg
                      key={season.season_number}
                      src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                    />
                    <h2>{season.name}</h2>
                  </SeasonContainer>
                ) : (
                  ""
                )
              )}
          </TableContainer>
        </Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
