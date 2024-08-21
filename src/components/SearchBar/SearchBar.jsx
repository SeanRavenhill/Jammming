import { useState } from 'react';

import { SearchIcon } from '../../assets/icons/SearchIcon';

export const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm(''); // Clears the input after processing
  };

  return (
    <div className='container mx-auto flex justify-center p-4'>
      <div className='flex justify-center items-center w-full bg-purple-400 rounded-md p-2'>
        <div className='flex flex-1 bg-white'>
          <input
            id='search'
            name='search'
            value={searchTerm}
            onChange={handleInputChange}
            className='px-2 rounded flex flex-1'
          />
          <div className='w-[1px] h-f bg-black opacity-15'></div>
          <button onClick={handleClick}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
