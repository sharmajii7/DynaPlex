import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  // pageNum is used as in one time only 20 results are shown
  // so change to pageNum 2 to show next 20 results
  const [pageNum, setPageNum] = useState(1);
  // to show loading until first 20 results appear
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(
      `/search/movie?include_adult=true&query=${query}&page=${pageNum}`
    ).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(
      `/search/movie?include_adult=true&query=${query}&page=${pageNum}`
    ).then((res) => {
      if (data?.results) {
        // merges old data with the new one instead of replacing it
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="pageTitle">
              <div>Your search did not match anything in the database.</div>
              <br></br>
              <div>Suggestions:</div>
              <ul>
                <li>Make sure that all words are spelled correctly. </li>
                <li>Try different keywords. </li>
                <li>Try more general keywords. </li>
                <li>Try fewer keywords.</li>
              </ul>
            </span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
