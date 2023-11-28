import React, { useState } from "react";
import axios from 'axios';
function SearchBar() {
    const [searchbar,setsearchbar]=useState("");
    const [searchResult,setsearchResult]=useState([]);
    function implementSearch(event){
        event.preventDefault();
        axios.get("https://api.unsplash.com/search/photos",{
            headers:{Authorization: `Client-ID SlZkWjLzzpSaPCd6AgniEAI-3nPf_hsLBeuVZjOuCYo`},
            params:{query:searchbar}
        }).then(response=>{
            setsearchResult(response.data)
            setsearchbar("")
        })
        .catch(error=>console.log(error))
    }
  return (
    <>
        <form onSubmit={implementSearch}>
            <input type="text" placeholder="Search..." value={searchbar}
                onChange={(e)=>setsearchbar(e.target.value)}/>
            <button type="submit">Submit</button>
            
        </form>
    </>
  );
}

export default SearchBar;
