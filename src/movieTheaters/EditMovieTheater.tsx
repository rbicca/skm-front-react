import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){

    return (
        <>
            <h3>Alterar cinema</h3>
            <MovieTheaterForm 
                model={{name: 'Baltimore'}}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}