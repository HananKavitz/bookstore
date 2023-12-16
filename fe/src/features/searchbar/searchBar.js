import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from 'antd';
import type { SearchProps } from '../Search';


import styles from './searchBar.module.css';

const { Search } = Input;


const SearchBar = ({ callback }) => {
    const onSearch: SearchProps['onSearch'] = (value) =>callback(value);

    const debouncedOnchange = useDebouncedCallback(
        (value) => {
          callback(value);
        },
        // delay in ms
        1000
      );
    return <div className={styles.main}>
            <Search
                placeholder="Cyber books"
                 onSearch={onSearch}
                 enterButton
                 onChange={(evt) => debouncedOnchange(evt.target.value)}
             />
           </div>
};
export default SearchBar;
