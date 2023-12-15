import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './catalogue.module.css';
import Item from './item'
import PurchaseForm from '../purchase/purchaseForm';

const Catalogue = ({}) => {

const [books, setBooks] = useState([]);
const [chosenBook, setChosenBook] = useState(null);

useEffect(() => {

        axios.get('https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=40&startIndex=0').
        then(res => {
        setBooks(res.data.items);
        }).
        catch(err => {
            console.error(err);
        });

},[]);

  return (
    <div className={styles.main}>
        <div className={styles.grid}>

            {books.map(item => <div onClick={()=> setChosenBook(item)}>
                                    <Item title={item.volumeInfo.title} image={item.volumeInfo.imageLinks?.smallThumbnail}/>
                                </div>) }
        </div>
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
