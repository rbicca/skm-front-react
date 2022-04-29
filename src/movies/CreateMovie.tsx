import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie(){

    const nonSelectedGenres: genreDTO[] = [{id:1, name: 'Comédia'}, {id:2, name: 'SciFi'}];
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id:1, name: 'Baltimore'},{id:2, name: 'Ritz'}];

    return (
        <>
            <h3>Novo filme</h3>
            <MovieForm 
                model={{title: '', inTheaters: false, trailer: ''}} 
                onSubmit={values => console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={[]}
                selectedActors={[]}
            />
        </>
    );
}