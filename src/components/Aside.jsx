import React, { useState } from 'react'
import { addStorage } from '../helpers/AddStorage';

const Aside = ({setFilms, films}) => {

    const [movie, setMovie]=useState({});

    const [search, setSearch] =useState('');
    const [notFound, setNotFound]= useState(false);


    //funcion para añadir peliculas
    const AddMovie =(e)=>{
        e.preventDefault();
        let target = e.target;
        //console.log(target);
        let titleMovie = target.title.value;
        let descriptionMovie = target.description.value;
        let movie={
            id: new Date().getTime(),
            title: titleMovie,
            description: descriptionMovie
        }
        setMovie(movie);
        
        setFilms(element =>{
            //Añado la pelicula al array
            return [...element, movie ]
        })
        addStorage('movie', movie);
        }


        //funcion para buscar por pelicula desde el formulario de Buscador
        const SearchMovie =(e) => {
            //añado a search el valor traido del input
            setSearch(e.target.value);
            //filtro en el array de peliculas el elemento del escrito en el input del formulario
            let moviesSearch = films.filter(element =>{
                //retorno el elemento encontrado previo paso a minusculas del elemento filtrado y del buscado
                return element.title.toLowerCase().includes(search.toLocaleLowerCase());
            })
            if(moviesSearch  <= 0){
                moviesSearch = JSON.parse(localStorage.getItem('movie')) ;
                setNotFound(true);
            }else{
                setNotFound(false);
            }
            //actualico el listado de films
            setFilms(moviesSearch);
        }
       

    const titleComponent="Add Movies";
  return (
    <>
        <aside className="aside">
            <div className="search">
                <h3 className="title">Buscador :  {search}</h3>
                {notFound === true ? <span class="notFound">No se ha encontrado esa película</span>:''}
                
                <form>
                    <input type="text" 
                     id="search_field"
                     name="search"   
                     autoComplete='off'
                     value={ search }
                     onChange={SearchMovie}
                     />
                    <button>Search</button>
                </form>
            </div>
            <div className="add">
                <h3 className="title">{titleComponent}</h3>
                <strong className="strong">
                {(movie.title && movie.description) &&  movie.title}
                </strong>
                <form onSubmit={AddMovie}>
                    <input type="text" 
                        name="title"
                        id="title" 
                        aria-placeholder="Title"
                    />
                    <textarea name="description" 
                     placeholder="description">
                    </textarea>
                    <input type="submit" id="save" value="Send"/>
                </form>
            </div>
        </aside>
    </>
  )
}

export default Aside