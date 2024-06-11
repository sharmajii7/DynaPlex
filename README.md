# DynaPlex
# Movie Recommendation Website

Welcome to DynaPlex! This web application uses the TMDB (The Movie Database) API to provide users with top movie suggestions. This README will guide you through the setup, usage, and contribution process for the project.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)

## Features

- **Personalized Recommendations**: Get movie suggestions based on your preferences.
- **Search Functionality**: Search for your favourite movies.
- **Detailed Information**: View detailed information about movies including synopsis, cast, crew, and ratings.

## Demo

You can check out a live demo of the website [here](https://dynaplex.vercel.app).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```sh
   git clone https://github.com/sharmajii7/DynaPlex.git
   cd DynaPlex
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   cd server
   npm start
   ```

4. **Start the website**
   ```sh
   cd client
   npm run dev
   ```

## Usage

### Home Page
The home page provides a list of trending movies, upcoming movies as well as popular movies. Users can browse these movies and get more details by clicking on any movie poster.

### Search
Use the search bar at the top to find movies. The search results will provide a list of matching movies. It gives error is the search is invalid.

### Movie Details
Clicking on a movie poster will navigate you to the movie details page, where you can find information such as the synopsis, cast, crew, and similar movies.

## Configuration

The application requires the following environment variables to be set:

- `VITE_APP_TMDB_TOKEN`: Your TMDB API key.

These should be placed in a `.env` file in the root directory of your project.

## API Reference

This project utilizes the TMDB API to fetch movie data. Below are some of the main API endpoints used:

- **Get Trending Movies**
  ```http
  GET /trending/movie/day
  ```
  Retrieves a list of the day's trending movies.

- **Search Movies**
  ```http
  GET /search/movie?query=movie_name
  ```
  Searches for movies based on the provided query.

- **Get Movie Details**
  ```http
  GET /movie/{movie_id}
  ```
  Retrieves detailed information about a specific movie.

- **Get Similar Movies**
  ```http
  GET /movie/{movie_id}/similar
  ```
  Retrieves a list of movies similar to the specified movie.

For a full list of endpoints and parameters, refer to the [TMDB API documentation](https://developers.themoviedb.org/3).

---

Thank you for using the Movie Recommendation Website! If you have any questions or feedback, please feel free to open an issue on GitHub.
