import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/UseFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}/videos`);
  const { data: credits } = useFetch(`/movie/${id}/credits`);

  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
        cast={credits?.cast}
      />
      <Similar id={id} />
      <Recommendation id={id} />
    </div>
  );
};

export default Details;
