export const Button = ({savePlaylist}) => {
  return(
    <>
      <button 
        className='bg-gray-500 text-white p-4 rounded-md'
        onClick={savePlaylist}
      >
        Save Playlist
      </button>
    </>
  );
};