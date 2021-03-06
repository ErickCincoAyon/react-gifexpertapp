import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [ categories, setCategories ] = useState([{ id: 0, category: 'One Punch'}]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
                { 
                    categories.map(({ id, category }) => (
                        <GifGrid 
                            key={ id }
                            category={ category } 
                        />
                    ))
                }
        </>
    )
}

export default GifExpertApp;
