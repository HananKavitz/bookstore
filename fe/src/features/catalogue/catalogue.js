import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './catalogue.module.css';
import Item from './item'
import PurchaseForm from '../purchase/purchaseForm';
import PageSize from './pageSize';

const Catalogue = ({}) => {

const [books, setBooks] = useState([]);
const [chosenBook, setChosenBook] = useState(null);
const [pageSize, setPageSize] = useState(50);

useEffect(() => {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=${pageSize}&startIndex=0`).
        then(res => {
        setBooks(res.data.items);
        }).
        catch(err => {
            console.error(err);
        });

},[pageSize]);
    console.log(pageSize);
  return (
    <div className={styles.main}>
        <div className={styles.grid}>

            {books.map(item => <div onClick={()=> setChosenBook(item)}>
                                    <Item
                                        title={item.volumeInfo.title}
                                        image={item.volumeInfo.imageLinks?.smallThumbnail}
                                     />
                                </div>)
            }
        </div>

        <PageSize setPageSize={setPageSize} />

        {chosenBook && <PurchaseForm
                            item={chosenBook}
                            closeForm={()=>setChosenBook(null)}
                            onSubmit={(data)=>{console.log(data); setChosenBook(null)}}
                      />
        }
    </div>
  );
}

export default Catalogue;
