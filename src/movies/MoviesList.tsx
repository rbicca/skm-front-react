
import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';

export default function MoviesList(props: moviesListProps){

    if (!props.movies){
        return <Loading />
    } else if(props.movies.length === 0){
        return <>Não existem filmes para exibir</>
    } else {
        return(
            <div className={css.div}>
                {props.movies.map(movie => 
                    <IndividualMovie  key={movie.id} {...movie} />    
                )}
            </div>
        );
    }
}

interface moviesListProps{
    movies?: movieDTO[];
}