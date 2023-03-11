import React from "react";
import PropTypes from 'prop-types';
import { Header } from "./Searchbar.styled";
import { GrSearch } from "react-icons/gr";
import { SearchButton, SearchForm, SearchInput } from "./Searchbar.styled";
import toast from 'react-hot-toast';

export class Searchbar extends React.Component{
    state = {
        value: ''
    }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

    handleChange = (evt) => {
        this.setState({value: evt.target.value})
    }

    handleSubmit =(evt) => {
        evt.preventDefault();
        if (this.state.value.length === 0) {
            
            return toast('Put your request')
        };
        this.props.onSubmit(this.state.value);
        this.setState({value: ""})
    }

    render() {
       
        return (
            <Header >
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchButton type="submit">
                    <GrSearch/>
                    </SearchButton>

                        <SearchInput
                         name="input"
                        type="text"
                         autoComplete="off"
                        autoFocus
                         placeholder="Search images and photos"
                        value={this.state.value}
                         onChange={this.handleChange}
                        />
                </SearchForm>
            </Header>
        )
    }
}