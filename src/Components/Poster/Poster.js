import React from "react";
import { Link } from "react-router-dom";

import StarRating from "react-star-ratings";
import { Container, ImageContainer, Image, Rating, Title, Year, Div } from "./style";

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../../assets/noPosterSmall.png").default
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <Year>{year}</Year>
            <Div>
              <StarRating
                rating={rating / 2}
                starRatedColor="yellow"
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="2px"
                starEmptyColor="grey"
              />
              {Math.round(rating)} / 10
            </Div>
          </span>
        </Rating>
      </ImageContainer>
    </Container>
  </Link>
);

export default Poster;
