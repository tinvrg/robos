import React from 'react';
import "tachyons";

const SearchBox =({searchfield, searchChange})=>{
    return(
    <div className='pa3'>
    <input className='pa3 ba b--green bg-lightest-blue br3 w-40' type='search' placeholder='Search Robots' onChange={searchChange}/>
    </div>
    );
}
export default SearchBox;