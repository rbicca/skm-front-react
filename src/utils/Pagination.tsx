import { useEffect, useState } from "react";

export default function Pagination(props: paginationProps){

    const [linkModels, setLinkModels] = useState<linkModel[]>([]);

    useEffect(() => {
        const previousPageEnabled = props.currentPage !== 1;
        const previousPage = props.currentPage - 1;
        const links: linkModel[] = [];

        //Primeiro botão
        links.push({
            text: '<',
            enabled: previousPageEnabled,
            page: previousPage,
            active: false
        });

        //Botões do meio
        for(let i=1; i <= props.totalAmountOfPages; i++){
            if(i >= props.currentPage - props.radio && i<= props.currentPage + props.radio){
                links.push({
                    text: `${i}`,
                    enabled: true,
                    page: i,
                    active: props.currentPage === i
                });
            }
        }

        //Ultimo botão
        const nextPageEnabled = props.currentPage !== props.totalAmountOfPages && props.totalAmountOfPages > 0;
        const nextPage = props.currentPage + 1;
        links.push({
            text: '>',
            enabled: nextPageEnabled,
            page: nextPage,
            active: false
        });

        setLinkModels(links);

    },[props.currentPage, props.radio, props.totalAmountOfPages]);

    function selectPage(link: linkModel){
        if(link.page === props.currentPage){
            return;
        }

        if(!link.enabled){
            return;
        }

        props.onChange(link.page);
    }

    function getClass(link: linkModel){
        if(link.active){
            return "active pointer";
        }

        if(!link.enabled){
            return "disabled";
        }

        return "pointer";
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {linkModels.map(link => <li key={link.text} onClick={()=> selectPage(link)} className={`page-item cursor ${getClass(link)}`} >
                    <span className="page-link" >{link.text}</span>
                </li>)}
            </ul>
        </nav>
    );
}

interface linkModel {
    page: number;
    enabled: boolean;
    text: string;
    active: boolean;
}

interface paginationProps{
    currentPage: number;
    totalAmountOfPages: number;
    radio: number;  //Número de botoes com páginas exibidos antes e depois 
    onChange(page: number): void;
}

Pagination.defaultProps = {
    radio: 3
}