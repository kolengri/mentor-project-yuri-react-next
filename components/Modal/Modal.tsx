import * as React from 'react';

import styles from './styles.module.scss';

export type ModalProps = {};

export const Modal: React.FC<ModalProps> = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    const BLOCK = {display: 'block'};
    const NONE = {display: 'none'};
    return <>
    
    <div className={styles.modal} style ={isOpen ? BLOCK : NONE }>
    <h2>Hi!</h2>
    <h3>This is <span>SEARCH movies</span>.</h3>
    <h3>A live movies search application using external database via API.<br />
      Choose a film here and get redirected to the TMDb’s website for more information.</h3>
    <button onClick={()=>setIsOpen(false)}>GOT IT</button>
    <button type="button" onClick={() => window.location.assign('https://www.themoviedb.org/')}>Take me to TMDb</button>
    </div>
    <div className={styles.black} style ={isOpen ? BLOCK : NONE } onClick={()=>setIsOpen(false)} />
  </>
}