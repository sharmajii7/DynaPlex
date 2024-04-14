import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import ForYou from "./forYou/ForYou";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="homePage">
      {!!user && (
        <>
          <HeroBanner />
          <ForYou></ForYou>
          <Trending></Trending>
          <Popular></Popular>
          <TopRated></TopRated>
        </>
      )}
    </div>
  );
};

export default Home;
