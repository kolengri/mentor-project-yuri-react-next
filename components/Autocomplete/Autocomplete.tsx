import * as React from 'react';

import styles from './styles.module.scss'

export type AutocompleteProps = {
    queryValue: string
}
const API_ENDPOINT = 'https://api.themoviedb.org/3/search/movie?api_key=';
const API_KEY = '35c2658e0e706d145f4d4f7e995e368f';
interface films {
    id: number,
    title: string,
    vote_average: number,
    poster_path: string,
    release_date: string
}


export const Autocomplete: React.FC<AutocompleteProps> = (props) => {
    const { queryValue } = props;
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState<films>();

  React.useEffect(() => {
      if (queryValue.length > 0) {
    fetch(API_ENDPOINT + API_KEY + '&query=' + queryValue)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
    )
  }}, [])

  if (error) {
    return <div className={styles.autocompleteStyling}>An error has occured.</div>;
  } else if (!isLoaded) {
    return <div className={styles.autocompleteStyling}>Loading...</div>;
  } else {
   

    
    return (
        <div className={styles.autocompleteStyling}>
            <div className={styles.autocompleteItems}>
                {items.map((film)=>{
                    <div>
                        
                        <input type="hidden" value={'https://www.themoviedb.org/movie/' + film.id + '-' + film.title.replace(/[^a-zA-Z ]/g, '').replace(/ /g, '-').toLowerCase()} />
                    </div>
                })}
            </div>
        </div>
    )
}
}