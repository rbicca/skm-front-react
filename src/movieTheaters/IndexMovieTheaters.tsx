import { Link } from "react-router-dom";

export default function IndexMovieTheaters(){

    return (
        <>
            <h3>Cinemas</h3>
            <Link className="btn btn-primary" to="/movieTheaters/create" >Novo cinema</Link>
        </>
    );
}