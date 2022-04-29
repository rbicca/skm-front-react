import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie(){

    const nonSelectedGenres: genreDTO[] = [{id:2, name: 'SciFi'}];
    const selectedGenres: genreDTO[] = [{id: 1, name:'Comédia'}];

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id:2, name: 'Ritz'}];
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name:'Baltimore'}];

    return (
        <>
            <h3>Alterar filme</h3>
            <MovieForm 
                model={{title: 'HP e as relíquias da morte', 
                        inTheaters: true, 
                        trailer: 'http://', 
                        releaseDate: new Date('2011-11-19T00:00:00')
                    }} 
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
                selectedActors={[]}
            />

        </>
    );
}