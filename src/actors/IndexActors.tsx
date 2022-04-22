import { Link } from "react-router-dom";

export default function IndexActors(){

    return (
        <>
            <h3>Atores</h3>
            <Link className="btn btn-primary" to="/actors/create">Novo ator</Link>
        </>
    );
}