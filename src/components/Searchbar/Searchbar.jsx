import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Header } from "./Searchbar.styled";
import { GrSearch } from "react-icons/gr";
import { SearchButton, SearchForm, SearchInput } from "./Searchbar.styled";
import toast from 'react-hot-toast';



export const Searchbar = ({ onSubmit }) => {
    
    const [value, setValue] = useState("");


    const handleChange = (evt) => setValue(evt.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (value.length === 0) { return toast('Put your request') };
        onSubmit(value);
        setValue("");
    };

    return (
        <Header >
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton type="submit">
                    <GrSearch />
                </SearchButton>

                <SearchInput
                    name="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={value}
                    onChange={handleChange}
                />
            </SearchForm>
        </Header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};