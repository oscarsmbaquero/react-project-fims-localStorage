import React, { useEffect, useState } from 'react'
import Edit from './Edit';
import Loader from './Loader';

const Listado = ({films,setFilms}) => {
  //const [films,setFilms]=useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [edit, setEdit]= useState(0);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  useEffect(()=>{
    console.log('componente cargado ');
    
   getMovies();

  },[])



  const getMovies =() =>{
    let movies = JSON.parse(localStorage.getItem('movie'));

   //console.log(movies);
   setFilms(movies);

   return movies;

  }
  const deleteMovie = (id) => {
    console.log(id);

    let moviesSaved = getMovies();
    
    let newMovies = moviesSaved.filter(item=> item.id !== parseInt(id));
    

    setFilms(newMovies);

    localStorage.setItem('movie',JSON.stringify(newMovies));
  }



 
   
  
  return (
    <>
        {films ?
          <section className="content">
         
            {isLoaded === false ? (
               <Loader />
            ) : (
              <>
                 

                  {films.map((post, key) => (
                        <div key={ key }>
                          <article className="movie-item">
                            <h3 className="title">{post.title}</h3>
                            <p className="description">{post.description}</p>
                            <button className="edit" onClick={() => setEdit(post.id)}>Edit</button>
                            <button className="delete" onClick={() => deleteMovie(post.id)}>Delete</button>
                            {edit === post.id ? 
                             <Edit movie={post} getMovies={getMovies} setEdit={setEdit} setFilms={setFilms}/>:
                            ''}
                          </article>
                        </div>                        
                    ))}
                      
                  
            </> 
            )} 
                    
            </section> 
        :<p class="content">'No hay Peliculass en el Storage'</p>}
    </>
  )
}

export default Listado