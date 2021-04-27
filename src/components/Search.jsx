import {InputGroup, InputGroupAddon, Input, Button} from "reactstrap";
import {React, useState} from "react";
import axios from "axios";
import {API} from "../configuration/api";
// useRef

const Search = ({setSearchResults, searchResults}) => {
    const [searchText, setSearchText] = useState("");
    const processSearch = (text) => {
        console.log(text, text.length);
        if (text.length > 0)
        {
            axios.get(API + "search.php?s=" + text )
        .then(response => {
            if (response.data.drinks )
            {
                setSearchResults(response.data.drinks);
            }
        })
        }
        else
        {
            console.log("Bz");
            setSearchResults([]);
        }
    }
    console.log(searchText);
    return (
        <>
        <InputGroup>
            <Input 
                name="search" 
                id="search" 
                placeholder="Martini, Margarita, Bloody Mary, ..." 
                value={searchText}
                onChange={e => {
                    setSearchText(e.target.value);
                    if (searchText.length > 2) processSearch(searchText); else setSearchResults([]);
                }}
            />
            <InputGroupAddon addonType="prepend">
                <Button color="primary" onClick={e=>{
                    processSearch(searchText);
                }} disabled={searchText.length === 0}>Search</Button>
            </InputGroupAddon>
        </InputGroup>        
        </>
    );
}

export default Search;