export interface actorCreationDTO{
    name: string;
    dateOfBirth?: Date;
    picture?: File;
    pictureURL?: string;
    biography?: string;
}

export interface actorMovieDTO{
    id: number;
    name: string;
    caracter: string;
    picture: string;   
}