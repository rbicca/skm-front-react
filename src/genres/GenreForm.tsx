import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from 'yup';
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps){

    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Campo obrigatório').max(50, 'Tamanho máximo 50').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                <TextField displayName="Nome" field="name" />

                <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                <Link className="btn btn-secondary" to="/genres">Cancelar</Link>

                </Form>
            )}

        </Formik>
    );
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}