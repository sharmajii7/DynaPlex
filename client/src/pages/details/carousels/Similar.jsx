import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/UseFetch";

const Similar = ({ id }) => {
  const { data, loading } = useFetch(`/movie/${id}/similar`);

  return (
    <Carousel
      title="Similar Movies"
      data={data?.results}
      loading={loading}
      endpoint="movie"
    />
  );
};

export default Similar;
