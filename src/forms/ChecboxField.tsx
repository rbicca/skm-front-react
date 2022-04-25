import { Field } from "formik";

export default function CheckboxField(props: checkboxFieldProps){

    return (
        <div className="mb-3 form-check">
            <Field className="form-check-input" type="checkbox" id={props.field} name={props.field}/>
            <label htmlFor={props.field}>{props.displayName}</label>
        </div>
    );
}

interface checkboxFieldProps{
    displayName: string;
    field: string;
}