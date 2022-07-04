import React from 'react'

const Edit = ({movie, getMovies, setEdit, setFilms}) => {

  //funcion para editar peliculas
  const saveEdition = (e, id)=>{
     e.preventDefault();
    
     //los datos del formulario
     let target =e.target

     //me traigo las pelis del listado de peliculas traidas por props del listado
     const saveMovies =getMovies();
     //busco el indice en las peliculas traidas del listado
     const index = saveMovies.findIndex(element => element.id === id);
     
     
     //creo un objeto para guardar los datos de la pelicula traidos del formulario
     let movie_update = {
      id,
      title : target.title.value,
      description: target.description.value,
     };
     //actualizo los datos del indice sellecionado 
     saveMovies[index] =movie_update;
     
     localStorage.setItem('movie', JSON.stringify(saveMovies));
     setFilms(saveMovies);
     setEdit(0);




     


  }
  //console.log(movie);

    const titulo_component = "Editar Pelicula";
  return (
    <div className="form-edit">
      <h4 className="title">{titulo_component}</h4>
      <form  onSubmit={e => saveEdition(e, movie.id)} className="edit-form" >
        <input type="text" 
               name="title"
               className='title_edit'
               defaultValue={movie.title}
        />
        <input type="text" 
               name="description"
               className='description'
               defaultValue={movie.description}
        />
        <input type="submit" className="edit" value="Actualizar"/>
        
      </form>
    </div>
  )
}

export default Edit