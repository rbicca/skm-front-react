import { NavLink } from "react-router-dom";

export default function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src="/img/logoSKs.png" alt="logo" />React</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genres">Gêneros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies/filter">Procurar filmes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actors">Atores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movieTheaters">Cinemas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies/create">Novo filme</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}