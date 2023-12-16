import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './catalogue.module.css';
import Item from './item'
import PurchaseForm from '../purchase/purchaseForm';
import PageSize from './pageSize';
import SearchBar from '../searchbar/searchBar';
import EmptyPage from '../emptyPage/emptyPage';
const Catalogue = ({}) => {
const api = 'https://www.googleapis.com/books/v1/volumes';
const [books, setBooks] = useState([]);
const [chosenBook, setChosenBook] = useState(null);
const [pageSize, setPageSize] = useState(50);
const [query, setQuery] = useState('');
useEffect(() => {

        axios.get(`${api}?q=cyber${query ? '+' + query : ''}&maxResults=${pageSize===50? 40 : pageSize}&startIndex=0`)
        .then(res1 => {
            setBooks(res1.data.items);
             if (pageSize === 50) {
                axios.get(`${api}?q=cyber${query ? '+' + query : ''}&maxResults=10&startIndex=40`)
                .then(res2 => {
                    const allBooks = [...res1.data.items, ...res2.data.items];
                    setBooks(allBooks);
                })
                .catch(err2 => {
                    console.error(err2);
                });
            }
        })
        .catch(err => {
            console.error(err);
        });

}, [pageSize, query]);

  return (
    <div className={styles.main}>
        <SearchBar callback={(value) => setQuery(value)}/>
        {books.length === 0 ?
            <EmptyPage /> :
            <div className={styles.grid}>

                {books.map(item => <div onClick={()=> setChosenBook(item)}>
                                        <Item
                                            title={item.volumeInfo.title}
                                            image={item.volumeInfo.imageLinks?.smallThumbnail}
                                         />
                                    </div>)
                }
            </div>
        }

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
