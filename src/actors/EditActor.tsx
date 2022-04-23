import ActorForm from "./ActorForm";

export default function EditActor(){

    return (
        <>
            <h3>Alterar ator</h3>

            <ActorForm 
                model={{ name: 'Daniel Radcliffe', 
                        dateOfBirth: new Date('1989-07-23T00:00:00'),
                        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Daniel_Radcliffe_in_July_2015.jpg/440px-Daniel_Radcliffe_in_July_2015.jpg',
                        biography: `# Mari
                        Essa criatura vai para **Londres** pqp`
                    }}
                onSubmit={async value => {
                    await new Promise(r => setTimeout(r,2000));
                    console.log('alterando com ', value);
                }}
            />
        </>
    );
}