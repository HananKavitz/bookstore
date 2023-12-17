import React from 'react';


import styles from './catalogue.module.css';


const PageSize = ({ setPageSize }) => {
    const sizes = [10,25,50];
    return <div className={styles.pageSizeWrapper}>
                No. of items:
               {sizes.map(s => <button className={styles.sizeButtons} onClick={(evt)=>setPageSize(parseInt(evt.target.innerText))}>{s}</button>)}
            </div>
};
export default PageSize;
