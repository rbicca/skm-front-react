import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater(){

    return (
        <>
            <h3>Novo cinema</h3>
            <MovieTheaterForm 
                model={{name: ''}}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}