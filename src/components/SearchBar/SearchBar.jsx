

// Import React Hooks
import { useState } from 'react';

// Import Components
import { SearchIcon } from '../../assets/icons/SearchIcon';

export const SearchBar = ({ handleSearch }) => {
  // State to keep track of the user's search input
  const [searchTerm, setSearchTerm] = useState('');

  // Updates the searchTerm state whenever the input value changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handles the click event when the user submits the search
  const handleClick = (e) => {
    e.preventDefault();       // Prevents the default form submission behavior
    handleSearch(searchTerm); // Calls the handleSearch function passed as a prop with the current search term
    setSearchTerm('');        // Clears the input after processing
  };

  return (
    <div className='container mx-auto flex justify-center p-4'>
      <div className='flex justify-center items-center w-full bg-purple-400 rounded-md p-2'>
        <div className='flex flex-1 bg-white'>
          {/* Input field for entering the search term */}
          <input
            id='search'
            name='search'
            value={searchTerm}
            onChange={handleInputChange}
            className='px-2 rounded flex flex-1'
          />

          {/* Divider between input and button */}
          <div className='w-[1px] h-f bg-black opacity-15'></div>

          {/* Button to trigger the search */}
          <button onClick={handleClick}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
