import { useParams } from "react-router-dom";

export default function EditGenre(){

    const {id} : any = useParams();     // esse id é o nome definido na rota

    return (
        <>
            <h3>Alterar Gênero</h3>
            <p>Estamos alterando o genero {id}</p>
        </>
    );
}