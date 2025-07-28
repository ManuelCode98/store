import { useState, createContext } from 'react';


interface ProductsFound {
    searchProductsState: {};
    setSearchProductsState: React.Dispatch<React.SetStateAction<{}>>;
}

const globalStateContext = createContext<any>( undefined );


// Todo hay que utilizar el estado global para que al crear, actualizar o borrar un producto tambien se vean los cambios en 
// Todo Los productos que estan cargados en la barra de busqueda
const GlobalStateProvider = ({ children }:any )=>{
    const [ searchProductsState, setSearchProductsState ] = useState('');

    return (
        <globalStateContext.Provider value={ { searchProductsState, setSearchProductsState} } >

            { children }
            
        </globalStateContext.Provider>
    )
}

export {
    GlobalStateProvider,
    globalStateContext,
}
