import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup';
import Map from '../utils/Map';

export default function MovieTheaterForm(props: propsMovieTheaterForm){

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('Campo obrigatório').firstLetterUppercase()
            })}
        >
            {(formikProps)=>(
                <Form>
                    <TextField field={"name"} displayName={"Nome"} />

                    <div style={{marginBottom: '1rem'}}>
                        <Map / >
                    </div>

                    <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                    <Link  className="btn btn-secondary" to="/movieTheaters">Cancelar</Link>
                </Form>
            )}
        </Formik>
    );
}

interface propsMovieTheaterForm{
    model: movieTheaterCreationDTO;
    onSubmit (values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}