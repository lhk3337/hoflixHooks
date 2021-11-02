import React, { useState, useEffect } from "react";
import { moviesApi, tvApi } from "api";
import DetailPresenter from "Routes/Detail/DetailPresenter";
import { useLocation, useHistory, useParams } from "react-router-dom";
const DetailContainer = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const { id } = useParams();

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMovie] = useState(pathname.includes("/movie/"));

  useEffect(() => {
    const fetchData = async () => {
      const parsedId = parseInt(id);

      if (isNaN(parsedId)) {
        return push("/");
      }

      try {
        if (isMovie) {
          const { data: movieResult } = await moviesApi.movieDetail(parsedId);
          setResult(movieResult);
        } else {
          const { data: tvResult } = await tvApi.showDetail(parsedId);
          setResult(tvResult);
        }
      } catch {
        setError("아무것도 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return <DetailPresenter result={result} error={error} loading={loading} />;
};

export default DetailContainer;
