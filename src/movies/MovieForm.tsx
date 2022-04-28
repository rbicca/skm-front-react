import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup';
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/ChecboxField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheater.model";
import TypeaheadActors from "../forms/TypeaheadActors";

export default function MovieForm(props: movieFormProps){

    const[selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const[nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const[selectedMovieTheaters, setSelectedMoviesTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const[nonSelectedMovieTheaters, setNonSelectedMoviesTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items: {id:number, name: string}[]): multipleSelectorModel[]{
        return items.map(item => { return{key: item.id, value: item.name}})
    }

    return(

        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
                values.genresIds = selectedGenres.map(i => i.key);
                values.movieTheatersIds = selectedMovieTheaters.map(i => i.key);

                props.onSubmit(values, actions);
            }}
            validationSchema={Yup.object({
                title: Yup.string().required('Campo obrigatório').firstLetterUppercase()
            })}
        >
            {(formikProps => (
                <Form>
                    <TextField displayName="Título" field="title" />
                    <CheckboxField displayName="Em cartaz" field="inTheaters" />
                    <TextField displayName="Trailer" field="trailer" />
                    <DateField displayName="Data de lançamento" field="releaseDate" />
                    <ImageField displayName="Poster" field="poster" imageURL={props.model.porterURL} />

                    <MultipleSelector 
                        displayName="Gêneros"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector 
                        displayName="Cinemas"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedMoviesTheaters(selected);
                            setNonSelectedMoviesTheaters(nonSelected);
                        }}
                    />

                    <TypeaheadActors displayName="Atores" actors={[]} />

                    <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                    <Link className="btn btn-secondary" to="/movies">Cancelar</Link>

                </Form>
            ))}
        </Formik>
    );
}

interface movieFormProps{
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
}