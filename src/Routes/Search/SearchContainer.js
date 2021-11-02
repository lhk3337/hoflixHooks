import { moviesApi, tvApi } from "api";
import React, { useState } from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      searchByTerm();
    }
  };

  const updateTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch {
      setError("검색 페이지를 찾을 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
};

export default SearchContainer;
