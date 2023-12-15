import React from 'react';
import { useEffect, useState } from 'react';

import styles from './catalogue.module.css';


const Item = ({title, image}) => {
return <div className={styles.item}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.image}>
                <img src={ image}/>
            </div>
        </div>
};
export default Item;
