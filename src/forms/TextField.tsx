import { ErrorMessage, Field } from "formik";

export default function TextField(props: propsTextField){

    return (
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field className="form-control"  id={props.field} name={props.field} />
            <ErrorMessage name={props.field}>{msg => <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div> 

    );

}

interface propsTextField{
    field: string;
    displayName: string;
}