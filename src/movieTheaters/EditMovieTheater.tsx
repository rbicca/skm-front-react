import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){

    return (
        <>
            <h3>Alterar cinema</h3>
            <MovieTheaterForm 
                model={{name: 'Hilton LP', latitude: 51.51589751854233, longitude: -0.1757428936252836}}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}