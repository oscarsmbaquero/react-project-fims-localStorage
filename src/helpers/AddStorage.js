

/*FUNCION QUE GUARDA LA CLAVE DEL ARRAY Y LOS DATOS EN LOCALSTORAGE*/


export const addStorage =(clave, element) =>{

    //localStorage.setItem('movie',JSON.stringify([peli]));
    // console.log(localStorage);
    let elementos = JSON.parse(localStorage.getItem(clave));
    // console.log(items);
    if(Array.isArray(elementos)){
        elementos.push(element);
    }else{
        elementos=[element];
    }
    console.log(elementos,'elementos');
    localStorage.setItem(clave, JSON.stringify( elementos ));
     console.log(localStorage,'storage');

    return element;
    

}