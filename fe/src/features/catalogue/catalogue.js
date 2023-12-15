import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './catalogue.module.css';
import Item from './item'

const Catalogue = ({}) => {

const [books, setBooks] = useState([]);
useEffect(() => {

        axios.get('https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=40&startIndex=0').
        then(res => {
        console.log(res.data.items);
        setBooks(res.data.items);
        }).
        catch(err => {
            console.error(err);
        });

},[]);
  return (
    <div className={styles.main}>
        <div className={styles.grid}>
            {books.map(item => <Item title={item.volumeInfo.title} image={item.volumeInfo.imageLinks?.smallThumbnail}/>) }
        </div>

    </div>
  );
}

export default Catalogue;
