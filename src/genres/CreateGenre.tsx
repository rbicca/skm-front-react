import { useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre(){

    const history = useHistory();

    return (
        <>
            <h3>Novo Gênero</h3>
            <Button onClick={() => {
                // ...saving to the database
                setTimeout(() => {
                    history.push('/genres');
                }, 1000);
                
            }} >Salvar</Button>
        </>
    );
}