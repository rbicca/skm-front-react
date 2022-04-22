import GenreForm from "./GenreForm";


export default function CreateGenre(){

    return (
        <>
            <h3>Novo Gênero</h3>

            <GenreForm model={{name: ''}}
                onSubmit={ async value => {
                    await new Promise(r => setTimeout(r,2000));
                    console.log(value);
                }}
            />

        </>
    );
}