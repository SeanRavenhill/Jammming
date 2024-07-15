import { SearchIcon } from '../../assets/icons/SearchIcon';

export const SearchBar = () => {
  return (
    <div className='container mx-auto flex justify-center p-4'>
      <div className='flex justify-center items-center w-full bg-purple-400 rounded-md p-2'>
        <div className='flex flex-1 bg-white'>
          <input id='search' name='search' className='px-2 rounded flex flex-1' />
          <div className='w-[1px] h-f bg-black opacity-15'></div>
          <label htmlFor='search'>
            <SearchIcon />
          </label>
        </div>
      </div>
    </div>
  );
};
