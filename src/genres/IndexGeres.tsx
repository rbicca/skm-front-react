import { genreDTO } from "./genres.model";
import {urlGenres} from "../endpoints";
import IndexEntity from "../utils/IndexEntity";

export default function IndexGenres(){

    return (
        <>

            <IndexEntity<genreDTO> 
                url={urlGenres} createURL="genres/create" title="Gêneros" entityName="Novo"
            > 
                { (genres, buttons) => <>
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
                                {buttons(`genres/edit/${genre.id}`,  genre.id)}
                            </td>
                        </tr>)}
                    </tbody>                
                </> }
            </IndexEntity>

        </>
    );
}
