import MovieForm from "./MovieForm";

export default function EditMovie(){

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
            />

        </>
    );
}