import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/UseFetch";

// currently this is just showing trending
// TODO
// update this with backend integration using ML model

const ForYou = () => {
  const { data, loading } = useFetch(`/trending/movie/week`);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">For You</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default ForYou;
