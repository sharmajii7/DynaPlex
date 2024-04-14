import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import axios from "axios";
import { Toaster } from "react-hot-toast";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import { UserContextProvider } from "../context/userContext";
import { UserContext } from "../context/userContext";

// axios.defaults.baseURL = "http://localhost:8000";
// axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  /*
  const [isRegistered, setIsRegistered] = useState(false);

  // Function to handle registration completion
  const handleRegistrationComplete = () => {
    // Perform any necessary actions after registration completion

    // Update the registration status to true
    setIsRegistered(true);
  };

  const { user } = useContext(UserContext);*/

  return (
    <BrowserRouter>
      <UserContextProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{ duration: 2000 }}
        ></Toaster>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />}></Route>
          <Route
            path="/home"
            element={
              <>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <Navbar></Navbar>
                <Register></Register>
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Navbar></Navbar>
                <Login></Login>
              </>
            }
          ></Route>
          <Route
            path="/:mediaType/:id"
            element={
              <>
                <Header></Header>
                <Details></Details>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/search/:query"
            element={
              <>
                <Header></Header>
                <SearchResult></SearchResult>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/explore/:mediaType"
            element={
              <>
                <Header></Header>
                <Explore></Explore>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <Header></Header>
                <PageNotFound></PageNotFound>
                <Footer></Footer>
              </>
            }
          ></Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );

  // return (
  //   <BrowserRouter>
  //     <UserContextProvider>
  //       <Header></Header>
  //       <Navbar></Navbar>
  //       <Toaster
  //         position="bottom-right"
  //         toastOptions={{ duration: 2000 }}
  //       ></Toaster>
  //       <Routes>
  //         <Route path="/" element={<Home></Home>}></Route>
  //         <Route path="/register" element={<Register></Register>}></Route>
  //         <Route path="/login" element={<Login></Login>}></Route>
  //         <Route path="/:mediaType/:id" element={<Details></Details>}></Route>
  //         <Route
  //           path="/search/:query"
  //           element={<SearchResult></SearchResult>}
  //         ></Route>
  //         <Route
  //           path="/explore/:mediaType"
  //           element={<Explore></Explore>}
  //         ></Route>
  //         <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
  //       </Routes>
  //       <Footer></Footer>
  //     </UserContextProvider>
  //   </BrowserRouter>
  // );
}

export default App;
