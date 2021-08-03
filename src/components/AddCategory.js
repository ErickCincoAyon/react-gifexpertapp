import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('');
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ) {
            setCategories( ( cats ) => [{category: inputValue, id: cats[0].id + 1}, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="animate__animated animate__headShake">
            <input 
                type="text"
                value={ inputValue }
                onChange={(e) => handleInputChange(e)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
