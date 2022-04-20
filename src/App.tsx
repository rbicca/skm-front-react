import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});
  
  useEffect(() =>{

    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Harry Potter e a pedra filosofal',
            poster: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg'
          },{
            id: 2,
            title: 'Star Wars a vingança dos Siths',
            poster: 'https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg'
          }
        ],
        upComingReleases: [
          {
            id: 3,
            title: 'Stranger Things 5 temporada',
            poster: 'https://pbs.twimg.com/media/ETEmRJjXQAA0thP?format=jpg&name=large'
          }
        ]
      });
    }, 3000);

    return () => clearTimeout(timerId);

  },[]);


  return (
   <>
    <h3>Nos cinemas</h3>
    <MoviesList movies={movies.inTheaters} />
    <h3>Em breve</h3>
    <MoviesList movies={movies.upComingReleases} />
   </>
  );
}

export default App;
