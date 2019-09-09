import React,{ useState, createContext} from 'react';

export default class MovieClass {

}

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 231244
    },
    {
      name: 'Inception',
      price: '$10',
      id: 2312444
    }
  ]);
  return(
    <MovieContext.Provider value={'Hello'}>
      {props.childeren}
    </MovieContext.Provider>

  );
}
