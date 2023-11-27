const Title = document.querySelector("#Title");
const Year = document.querySelector("#Year");
const Runtime = document.querySelector("#Runtime");
const Plot = document.querySelector("#Plot");
const Genre = document.querySelector("#Genre");


const object = {
    "Title": "Titanic",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "19 Dec 1997",
    "Runtime": "194 min",
    "Genre": "Drama, Romance",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Language": "English, Swedish, Italian, French",
    "Country": "United States, Mexico",
    "Awards": "Won 11 Oscars. 126 wins & 83 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.9",
    "imdbVotes": "1,252,252",
    "imdbID": "tt0120338",
    "Type": "movie",
    "DVD": "01 Jun 2014",
    "BoxOffice": "$674,292,608",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  };


Title.innerHTML = object.Title;
Year.innerHTML = object.Year;
Runtime.innerHTML = object.Runtime;
Plot.innerHTML = object.Plot;
Genre.innerHTML = object.Genre;