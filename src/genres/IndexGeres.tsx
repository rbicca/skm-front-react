import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import {urlGenres} from "../endpoints";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import customConfirm from "../utils/customConfirm";

export default function IndexGenres(){

    const [genres, setGenres] = useState<genreDTO[]>();
    const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    useEffect( ()=> {
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, recordsPerPage]);

    function loadData(){
        axios.get(urlGenres, { params: {page, recordsPerPage} })
        .then( (response: AxiosResponse<genreDTO[]>) => {
            const totalAmountOfRecords = parseInt(response.headers["totalamountofrecords"],10);
            setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
            setGenres(response.data);
        });
    }
    
    async function deleteGenre(id: number){
        try{
            await axios.delete(`${urlGenres}/${id}`);
            loadData();
        } catch(error){
            if (error && error.response){
                console.error(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Gêneros</h3>
            <Link  className="btn btn-primary" to="/genres/create">Novo Gênero</Link>

            <Pagination  currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage => setPage(newPage)} />

            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }}/>

            <GenericList list={genres}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres?.map( genre => 
                        <tr key={genre.id}>
                            <td>{genre.name}</td>
                            <td>
                                <Link className="btn btn-success" to={`/genres/edit/${genre.id}`}>Alterar</Link>
                                <Button className="btn btn-danger" onClick={() => customConfirm(() => deleteGenre(genre.id))} >Excluir</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </GenericList>
        </>
    );
}
