import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorMovieDTO } from "../actors/actors.model";

export default function TypeaheadActors(props: typeaheadActorsProps){

    const actors: actorMovieDTO[] = [
        {id: 1, name:'Jery Rian', caracter: '', picture:'https://m.media-amazon.com/images/M/MV5BYTM4NTJlZjEtNjdiNS00Y2Y5LTlhYzMtNzVkMjU1MjZmNDE5XkEyXkFqcGdeQXVyMjEwODk5MDY@._V1_UY317_CR12,0,214,317_AL_.jpg'},
        {id: 2, name:'Marika Domińczyk', caracter: '', picture:'data:image/jpeg;base64,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'},
        {id: 3, name:'Lauren German', caracter: '', picture:'https://tvebrasil.com.br/wp-content/uploads/2019/05/lauren-german-lucifer-netflix.jpg'},
    ];

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO){
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO){
        if(!draggedElement) { return; }

        if(actor.id !== draggedElement.id){
            const ix = props.actors.findIndex(x => x.id === draggedElement.id);
            const ixDest = props.actors.findIndex( x=> x.id === actor.id);

            const actors = [...props.actors];
            actors[ixDest] = draggedElement;
            actors[ix] = actor;

            props.onAdd(actors);
        }

    }


    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead 
                id="typehead"
                onChange={actors => {
                    if(actors.length > 0){
                    if(props.actors.findIndex(x => x.id === actors[0].id) === -1) {
                        props.onAdd([...props.actors, actors[0]]);
                    }}
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Escreva o nome do ator..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.picture} alt="actor" style={{height: '64px', width: '64px', marginRight: '10px'}}/>
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actors.map(actor => 
                    <li 
                        key={actor.id} 
                        className="list-group-item list-group-item-action"
                        draggable={true}
                        onDragStart={() => handleDragStart(actor)}
                        onDragOver={() => handleDragOver(actor)}
                    >
                        {props.listUI(actor)}
                        <span 
                            className="badge badge-primary badge-pill pointer text-dark" 
                            style={{marginLeft: '0.5 rem'}} 
                            onClick={() => props.onRemove(actor)}
                        >X</span>
                    </li>
                )}
            </ul>

        </div>
    );
}

interface typeaheadActorsProps{
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement; 
}