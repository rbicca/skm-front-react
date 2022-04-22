import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre(){

    const {id} : any = useParams();     // esse id é o nome definido na rota

    return (
        <>
            <h3>Alterar Gênero</h3>
            
            <GenreForm model={{name: 'Comédia'}}
                onSubmit={ async value => {
                    await new Promise(r => setTimeout(r,2000));
                    console.log('alterando id', id, 'com ', value);
                }}
            />
        </>
    );
}