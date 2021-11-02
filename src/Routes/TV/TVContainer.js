import React, { useState, useEffect } from "react";
import { tvApi } from "api";
import TVPresenter from "Routes/TV/TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: topRated },
        } = await tvApi.topRated();
        const {
          data: { results: popular },
        } = await tvApi.popular();
        const {
          data: { results: airingToday },
        } = await tvApi.airingToday();
        setTopRated(topRated);
        setPopular(popular);
        setAiringToday(airingToday);
      } catch {
        setError("TV 페이지를 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />
  );
};
export default TVContainer;
