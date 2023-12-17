import React from 'react';

import styles from './emptyPage.module.css';


const EmptyPage = ({title, image}) => {
return <div className={styles.main}>
            <h2>Loading data...</h2>
        </div>
};
export default EmptyPage;
