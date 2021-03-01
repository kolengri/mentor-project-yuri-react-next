import * as React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import searchIcon from '@iconify-icons/gg/search';


import styles from './styles.module.scss';
import { Autocomplete } from "../../components";

export type InputProps = {};

export const Input: React.FC<InputProps> = (props) => {
    const [title, setTitle] = React.useState('');
    const [checked, setChecked] = React.useState(true);
    const radio = React.useRef(null);
    return <div className={styles.container}>
      <div className={styles.container__input}>
        {/* <Icon className={styles.iconify} icon={searchIcon} /> */}
        <input className={styles.query} placeholder="start typing..." onChange={event => setTitle(event.target.value)} />
        <div className={styles.radio}>
          <div>
            <label>List
            <input type="radio" ref={radio} onChange={()=>setChecked(!checked)} name="type" value="List" />
            </label>  
          </div>
          <div>
            <label>Posters
                <input type="radio" ref={radio} defaultChecked={checked} onChange={()=>setChecked(!checked)} name="type" value="Posters" />
            </label>
          </div>
        </div>
        <Autocomplete queryValue={title} />
      </div>
    </div>
    
};