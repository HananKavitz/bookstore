import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './catalogue.module.css';
import Item from './item'
import PurchaseForm from '../purchase/purchaseForm';
import PageSize from './pageSize';
import SearchBar from '../searchbar/searchBar';
const Catalogue = ({}) => {

const [books, setBooks] = useState([]);
const [chosenBook, setChosenBook] = useState(null);
const [pageSize, setPageSize] = useState(50);
const [query, setQuery] = useState('');
useEffect(() => {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=cyber${query ? '+' + query: ''}&maxResults=${pageSize===50? 40: pageSize}&startIndex=0`)
        .then(res => {
            setBooks(res.data.items);
        })
        .catch(err => {
            console.error(err);
        });
        if (pageSize === 50){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=cyber&maxResults=10&startIndex=40`)
            .then(res => {
                const allBooks = [...books, ...res.data.items];
                console.log(allBooks.length, pageSize);
                setBooks(allBooks);
            })
            .catch(err => {
                console.error(err);
            });
        }

},[pageSize, query]);

  return (
    <div className={styles.main}>
        <SearchBar callback={(value) => setQuery(value)}/>
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
