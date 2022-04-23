import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from 'yup';
import { actorCreationDTO } from "./actors.model";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";


export default function ActorForm(props: actorFormProps){
    
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema = {Yup.object({
                name: Yup.string().required('Este campo é obrigatório').firstLetterUppercase(),
                dateOfBirth: Yup.date().nullable().required('Este campo é obrigatório')
            })}

        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="nome" field="name"/>
                    <DateField displayName="Data de Nascimento" field="dateOfBirth"  />
                    <ImageField displayName="Foto" field="picture" imageURL={props.model.pictureURL} />
                    <MarkdownField displayName="Biografia" field="biography" />
                    
                    <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                    <Link to="/actors" className="btn btn-secondaty">Cancelar</Link>
                </Form>
            )}
        </Formik>
    );
}

interface actorFormProps{
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>):void;
}