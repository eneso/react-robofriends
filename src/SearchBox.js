import React from 'react';
import CardList from './CardList';
import SearchBox from './SeachBox';
import {robots} from './robots'; 

const SearchBox = () => {
    return (
        <input type='search' placeholder='search robots'/>
    );
}

export default SearchBox;