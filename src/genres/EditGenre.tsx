import { urlGenres } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genreDTO } from "./genres.model";

export default function EditGenre(){
    
    return (
        <>
            <EditEntity<genreCreationDTO, genreDTO>
                url={urlGenres} entityName="Gêneros" indexURL="/genres"
            >
                { (entity, edit) => 
                     <GenreForm model={entity}
                            onSubmit={ async value => {
                                //await new Promise(r => setTimeout(r,2000));
                                //console.log('alterando id', id, 'com ', value);
                                await edit(value);
                            }}
                 />
                }
            </EditEntity>
        </>
    );
}