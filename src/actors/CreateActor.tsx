import ActorForm from "./ActorForm";

export default function CreateActor(){

    return (
        <>
            <h3>Novo ator</h3>

            <ActorForm 
                model={{name: '', dateOfBirth: undefined}}
                onSubmit={values => console.log(values)}
            />
        </>
    );
}