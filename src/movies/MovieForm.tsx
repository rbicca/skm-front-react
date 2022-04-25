import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup';
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/ChecboxField";

export default function MovieForm(props: movieFormProps){

    return(

        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
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

}