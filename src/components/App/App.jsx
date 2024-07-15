import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';

export const App = () => {
  return (
    <div className='absolute inset-0 flex flex-col'>
      <main className='relative flex-1 flex bg-cover bg-center bg-blend-luminosity bg-purple-200'>
        <div className='relative flex-1 flex flex-col'>
          <SearchBar />
          <Playlist />
        </div>
      </main>
    </div>
  );
};
