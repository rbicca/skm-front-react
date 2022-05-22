import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovieTheaters } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTheater(){

    const history = useHistory();
    const [errors, setErros] = useState<string[]>([]);

    async function create(movieTheater:movieTheaterCreationDTO) {
        try{
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters");
        } catch(error){
            if(error && error.response){
                setErros(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Novo cinema</h3>
            <DisplayErrors errors={errors} />

            <MovieTheaterForm 
                model={{name: '', latitude:51.51566402028737, longitude: -0.17596659044803806}}
                onSubmit={async values => await create(values)}
            />
        </>
    );
}